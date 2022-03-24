const new_data =(data )=>{
    
    return(dispatch)=>{
        dispatch({type:"newdata",data:data})
    }
}

export {new_data}