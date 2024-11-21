import React from 'react'
import { useStore } from './store'
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
  const { isListModalOpen , isWorkSpaceModalOpen, modalName , modalEmoji, modalType, setModalEmoji, setModalName , handleSaveModal, closeListModal, closeWorkSpaceModal} = useStore();

const handleSave = ()=>{
  handleSaveModal();
}

const handleClose =()=>{
  if(modalType === 'List'){
    closeListModal();
  } else if(modalType === 'WorkSpace'){
    closeWorkSpaceModal();
  }
}

if(!isListModalOpen && !isWorkSpaceModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{`Create New ${modalType}`}</h2>
          <button 
          onClick={handleClose}
          className="text-gray-600 hover:text-gray-900">
            <FaTimes />
          </button>
        </div>
        <input
          type="text"
          name=""
          id=""
          value={modalName}
          onChange={(e) => setModalName(e.target.value)}
          placeholder={`enter ${modalType}`}
          className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
        />
        <input
          type="text"
          value={modalEmoji}
          onChange={(e) => setModalEmoji(e.target.value)}
          placeholder="enter emoji (optional)"
          className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
        />
        <button onClick={handleSave}
        className='bg-black text-white px-4 py-2 rounded-lg'
        >Save</button>
      </div>
    </div>
  );
}

export default Modal