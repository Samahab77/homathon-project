import React  from 'react';
import '../App.css';


const Hedder =()=> {
        return (
            <div>
             <header>
            <div className='wrapper'>
              <h1>Fun Food Friends</h1>
              
            </div>
            <nav className = "navbar navbar-light bg-light" >
            <a className = "navbar-brand" > Shoppr </a>
              <button className = "btn btn-outline-success my-2 my-sm-0"  type = "submit" > Cart </button> 
            </nav>
        </header>
            </div>
             
        )
}
    export default Hedder;
