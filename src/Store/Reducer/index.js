//inital store
const Inital_State = {
    count : 0,
    data : ["smit"]
}

export default (state=Inital_State,action)=>{
    console.log(action)
    switch(action.type){
        case "setdata":
            return({
                ...state,
                count: state.count+1
            })
    
            case "newdata":
                return({
                    ...state,
                    data : [...state.data,action.data]
                })
    }
    return state
}