import React from 'react'
import { useStore } from './store'
const MainBar = () => {
 const {list , workSpace , selectedList , selectedWorkSpace , todoText , setSelectedList , setToDoText , setSelectedWorkSpace , handleAddToDo} = useStore();
  return (
    <div className="flex-1 p-6">
      <div className="mb-4">
        <input
          type="text"
          name=""
          id=""
          value={todoText}
          onChange={(e) => {
            setToDoText(e.target.value);
          }}
          placeholder="add a new todo..."
          className="border border-gray-300 p-2 rounded-lg w-full"
        />
        <div className="mt-2 flex items-center">
          <select
            name=""
            id=""
            value={selectedList}
            onChange={(e) => setSelectedList(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg mr-2"
          >
            <option value="" disabled>
              Select List
            </option>
            {list.map((list, index: number) => (
              <option value={list.name} key={index}>
                {list.emoji} {list.name}
              </option>
            ))}
          </select>

          <select
            name=""
            id=""
            value={selectedWorkSpace}
            onChange={(e) => setSelectedWorkSpace(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg mr-2"
          >
            <option value="" disabled>
              Select Workspace
            </option>
            {workSpace.map((workspace, index: number) => (
              <option value={workspace.name} key={index}>
                {workspace.emoji} {workspace.name}
              </option>
            ))}
          </select>
          <button className="bg-black text-white px-4 py-2 rounded-lg ml-4 flex items-center"
          onClick={handleAddToDo}
          >
            Add ToDo
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBar