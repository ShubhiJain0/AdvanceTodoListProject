import { MdMoreVert } from 'react-icons/md'
import './App.css'
import { useStore } from './store'
import SideBar from './SideBar'
import MainBar from './MainBar'
import Modal from './Modal'
function App() {
 const {todo , editIndex , editText , dropDownIndex , handleEdit , handleUpdate , handleDropDownClick, deleteToDo, setEditText, setEditIndex} = useStore();
  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 p-6">
          <MainBar />
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 ml-[2rem]">To Do List</h2>
            <ul className="list-disc pl-5">
              {todo.map((todo, index) => (
                <li key={index} className="mb-4 ml-[2rem]">
                  {editIndex === index ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        className=" px-2 py-1 mr-2 rounded-xl border border-gray-600 outline-none"
                        value={editText}
                        onChange={(e) => {
                          setEditText(e.target.value);
                        }}
                      />
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2"
                        onClick={() => handleUpdate(index)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-gray-500 text-white py-1 px-2 rounded-lg"
                        onClick={() => setEditIndex(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="relative flex justify-between items-center">
                        <span className="mr-4">
                          <strong>{todo.text}</strong>
                          (List: {todo.list}) WorkSpace: {todo.workspace}
                        </span>
                        <div className="flex items-center">
                          <MdMoreVert
                            className="cursor-pointer"
                            size={24}
                            onClick={() => handleDropDownClick(index)}
                          />
                          {dropDownIndex === index && (
                            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg">
                              <button
                                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 w-full text-left"
                                onClick={() => handleEdit(index)}
                              >
                                Update
                              </button>
                              <button
                                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 w-full text-left"
                                onClick={() => deleteToDo(index)}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Modal />
      </div>
    </>
  );
}

export default App
