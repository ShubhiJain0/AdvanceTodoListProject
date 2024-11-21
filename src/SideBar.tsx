import React from 'react'
import { useStore } from './store'
import { FaPlus } from 'react-icons/fa';
const SideBar = () => {
  const {list , workSpace, openListModal , openWorkSpaceModal} = useStore();
  return (
    <div className="w-60 bg-[#F9F9F9] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">Lists</h3>
          <ul>
            {list.map((list, index) => (
              <li
                key={index}
                className="p-2 hover: bg-[#ccc] rounded-lg cursor-pointer flex"
              >
                <span className="mr-2">{list.emoji}</span>
                {list.name}
              </li>
            ))}
          </ul>
          <button
            className="flex justify-center items-center mt-[1rem]"
            onClick={openListModal}
          >
            <FaPlus className="mr-2" />
            List
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold flex items-center">
            WorkSpaces
          </h3>
          <ul>
            {workSpace.map((list, index) => (
              <li
                key={index}
                className="p-2 hover: bg-[#ccc] rounded-lg cursor-pointer flex"
              >
                <span className="mr-2">{list.emoji}</span>
                {list.name}
              </li>
            ))}{" "}
          </ul>
          <button
            className="flex justify-center items-center mt-[1rem]"
            onClick={openWorkSpaceModal}
          >
            <FaPlus className="mr-2" /> WorkSpaces
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar