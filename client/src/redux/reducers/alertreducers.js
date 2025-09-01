const intialdata ={
    loading:false
}

const alertReducer=(state=intialdata,action)=>{
    
    switch(action.type)
    {
        case "Loading":{
            return{
                ...state,
                loading: action.payload
            }
        }
        
        default:return state
    }
}
export default alertReducer