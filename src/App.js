import React , {Component} from 'react';
import './App.css';
import firebase from './firebase.js'; // <--- add this line
import Products from'./components/Products';
import Hedder from './components/Hedder';



class App extends Component {
  
render(){
 return (
   <div className="App">
    <Hedder />
    <Products />
    </div>
  );
}
  
}

export default App;
