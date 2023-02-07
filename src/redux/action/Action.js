import axios from "axios";

export let add=(data)=>{
    return{
        type:"Add",
        payload:data
    };
};