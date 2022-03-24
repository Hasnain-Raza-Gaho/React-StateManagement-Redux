import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {set_data} from './Store/Action'
import Child from './child';

function App(props) {
 console.log(props)
  return (
    <div className="App">
      {props.count}
      <button onClick={()=>props.set_data()}>Inc</button>
      {/* {props.data2} */}
    <Child/>
    </div>
  );
}

const mapStateToProps = (state)=>({  //use for get state data 
// filevar   state data property
  count : state.count,
  // data2:state.data

})

const mapDispatchToProps=(dispatch)=>({  //function get 

  set_data :()=> dispatch(set_data())

})
export default connect(mapStateToProps,mapDispatchToProps)(App);
