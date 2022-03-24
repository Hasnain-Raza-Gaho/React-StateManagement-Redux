import React from "react";
import {connect} from 'react-redux'
import {new_data} from './Store/Action/setdata'

function Child(props) {
    console.log(props)

    return (
        <div>
            <h1>Child APP</h1>
            
            <button onClick={()=>props.newdata("ali")}>Add Data</button>

        </div>
    )

}

const mapstateToProps=(state)=>({
    data : state.data
})

const mapDispatchToProps=(dispatch)=>({
    newdata : (data)=>dispatch(new_data(data))
})

export default connect(mapstateToProps,mapDispatchToProps)(Child);