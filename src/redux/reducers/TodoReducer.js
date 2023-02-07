let InitState={
    list:[]
}

let TodoReducer=(state=InitState,action)=>{
    switch(action.type){
        case "Add":
            return{
                list:[...state.list,action.payload],
            };
            
    default:
        return state;
    }
}
export default TodoReducer