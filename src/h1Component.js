function H1Component(props){

    console.log("props: ", props.clickFunction)

      //////// js

      const clickHandler =()=> { 

        console.log("clickty!") 
  
      }
  
    //////// js

    return(<>
    
      <h1 onClick={props.clickFunction}> Woobly </h1>
      {/* <h1 onClick={clickHandler}> Woobly </h1> */}

    </>)


}
export default H1Component