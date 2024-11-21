import { create } from "zustand";

interface List{
  name : string,
  emoji : string
}

interface WorkSpace{
 name : string,
  emoji : string
}

interface ToDo{
  text : string,
  list : string,
  workspace : string,
}

interface AppState{
 list : List[];
  workSpace : WorkSpace[];
  todo : ToDo[];

  editIndex : null | number;
  editText : string;

  dropDownIndex : number | null;

  isWorkSpaceModalOpen : boolean;
  isListModalOpen : boolean;

  selectedList : string;
  selectedWorkSpace : string;

  todoText : string;
  modalName: string;
  modalEmoji : string;
  modalType: "List"| "WorkSpace"| null;

  addList : (name : string , emoji : string) =>void;

  addWorkSpace : (name : string , emoji : string )=>void;

  addToDo:(todo : ToDo)=>void;

  updateToDo :(index : number , updatedToDo: ToDo) => void;

  deleteToDo :(index: number)=>void;

  handleEdit : (index: number) =>void;

  handleUpdate : (index: number) =>void;

  handleDropDownClick : (index : number) =>void;

  setEditText : (text : string)=>void;

  setEditIndex : (index : number | null) =>void;

  openListModal : () =>void;

  closeListModal : ()=>void;

openWorkSpaceModal : ()=>void;

  closeWorkSpaceModal : ()=>void;
  setSelectedList : (list : string) =>void;
  setSelectedWorkSpace : (WorkSpace : string) =>void;
  setToDoText : (text : string) =>void;
 
  handleAddToDo : ()=>void;
 
  setModalName : (name : string)=>void;

  setModalEmoji : (emoji : string) =>void;
  setModalType : (type : "List" | "WorkSpace")=>void;

  handleSaveModal : ()=>void;

}

export const useStore =create<AppState>((set)=>({
list : [],
  workSpace : [],
  todo :[],

editText : "",
  
  editIndex : null,
  dropDownIndex :null,

  isWorkSpaceModalOpen : false,
  isListModalOpen : false,
  selectedList : "",

  selectedWorkSpace : "",
  
  todoText : "",
  
  modalName: "",
  
  modalEmoji : "",
  
  modalType: null,

  addList : (name , emoji ) =>set((state)=>({
   list : [...state.list , {name , emoji}]
})),

  addWorkSpace : (name  , emoji  )=>set((state)=>({
    workSpace : [...state.workSpace , {name , emoji}]
})),

  addToDo:(todo)=>set((state)=>({todo: [...state.todo , todo]})),

  updateToDo :(index, updatedToDo) => set((state)=>{
    const newToDos =[...state.todo]
    newToDos[index] = updatedToDo;
    return {
      todo : newToDos,
      editIndex : null,
      editText : '',
    }
  }),

  deleteToDo :(index)=>set((state)=>({
    todo : state.todo.filter((_, i)=>i!==index),
    dropDownIndex: null,
  })),

  handleEdit : (index) =>set((state)=>({
    editIndex: index,
    editText : state.todo[index].text,
    dropDownIndex: null,
  })),

  handleUpdate : (index: number) =>set((state)=>{
    const updatedToDo={
      ...state.todo[index],
      text: state.editText,
    };
    
    const newToDos = [...state.todo];
    newToDos[index] = updatedToDo;
    return {
      todo : newToDos,
      editIndex: null,
      editText : ''
    }
  }),

  handleDropDownClick : (index ) =>set((state)=>({
    dropDownIndex : index ===state.dropDownIndex ? null : index
  })),

  setEditText : (text )=>set({editText: text}),

  setEditIndex : (index  ) =>set({editIndex : index}),

  openListModal : () =>set({isListModalOpen : true , modalType : 'List'}),

  closeListModal : ()=>set({isListModalOpen : false , modalName : "" , modalEmoji : ""}),

  closeWorkSpaceModal: () =>set({isWorkSpaceModalOpen: false , modalName : "" , modalEmoji : ""}),

  openWorkSpaceModal : ()=>set({isWorkSpaceModalOpen : true , modalType : "WorkSpace"}),


  setSelectedList : (list ) =>set({selectedList : list}),
  
  setSelectedWorkSpace : (WorkSpace ) =>set({selectedWorkSpace : WorkSpace}),

  setToDoText : (text ) =>set({todoText : text}),
  
  handleAddToDo : ()=>set(state=>{
    const {todoText , selectedList , selectedWorkSpace} = state;

    if(todoText.trim() ===''){
      window.alert("ToDo can not be empty.");
      return state;
    }
    const newToDo ={
      text : todoText,
      list : selectedList,
      workspace : selectedWorkSpace
    }
    return {
      todo :[...state.todo, newToDo],
      todoText : '',
      // selectedText: '',
      selectedList: '',
      selectedWorkSpace: '',
    }
  }),

  setModalName : (name )=>set({modalName : name}),

  setModalEmoji : (emoji ) =>set({modalEmoji : emoji}),

  setModalType : (type)=>set({modalType : type}),

  handleSaveModal : ()=>set(state=>{
    const {modalName , modalEmoji , modalType} = state;
    if(modalName.trim()==='') return state;

    if(modalType ==='List'){
      state.addList(modalName , modalEmoji)
    } else if(modalType ==='WorkSpace'){
      state.addWorkSpace(modalName , modalEmoji)
    }
    return{
      modalName: '',
      modalType: null,
      modalEmoji : '',
      isListModalOpen: false,
      isWorkSpaceModalOpen : false,
    }
  }),
}))