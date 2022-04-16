
import './App.css';
import {connect} from 'react-redux'


function App(props) {
 console.log(props)
  return (
    <div className="App">
      <h1>Filhal Koi Error Nh Aaraha..</h1>
    </div>
  );
}

const mapStateToProps = (state)=>({  //use for get state data 
// filevar   state data property
 name: state.name
  // data2:state.data

})

const mapDispatchToProps=(dispatch)=>({  //function get 



})
export default connect(mapStateToProps,mapDispatchToProps)(App);
