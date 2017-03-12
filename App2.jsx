import React from 'react';
import ReactDOM from 'react-dom';

class App2 extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: ["ola..."]
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
    forceUpdateHandler() {
      this.forceUpdate();
   };

   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data;
      myArray.push(item)
      this.setState({data: myArray})
   };

  findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
   }



   render() {
      return (
         <div>
             <h4>Random numberX5: {(Math.random()*5).toFixed(2)}</h4>
             {/*For setting state*/}
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
            {/*For setting state*/}
           
           {/*For forcing update*/}
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {(Math.random()).toFixed(2)}</h4>
                  {/*For forcing update*/}
                   
                   {/*For finding the dom and executing the domnodehandler code*/}
                  <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>
                {/*For finding the dom and executing the domnodehandler code*/}
         </div>
      );
   }
}

export default App2;