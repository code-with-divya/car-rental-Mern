const initialdata = {
    cars:[]
};

const carReducer = (state=initialdata, action)=>{
    switch(action.type)
    {
       case 'GetAllCarData':{
        return{
            ...state,
            cars:action.payload
        }
       }
       default:return state
    }
}

export default carReducer;
