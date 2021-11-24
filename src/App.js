import logo from './logo.svg';
import './App.css';


import H1Component from './h1Component.js';


function App() {


  //////// js

    const clickHandler =()=> { 

      console.log("clickty-click!") 

    }

  //////// js


  return (<div>


      {/* <ShoppingItems />
      <Cart/>

      <CuteCitters />
      <Favs/> */}


      <H1Component 
      
        clickFunction={clickHandler} 
        samProovinAPoint={"A String"} 
      
      />
      {/* <h1 onClick={clickHandler}> Joobly </h1> */}

        {/* function H1Component(){


          return(<>

            <h1 onClick={clickHandler}> Woobly </h1>

          </>)


        }
        export default H1Component */}

    </div>);

    // .addEventlistener( "click" ()=>{} )


}
export default App;
