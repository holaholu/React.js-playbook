import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App7 extends React.Component {
       constructor(props) {
      super(props);
		
      this.state = {
         items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
      }

      this.handleAdd = this.handleAdd.bind(this);
   };

   handleAdd() {
      var newItems = this.state.items.concat([prompt('Create New Item')]);
      this.setState({items: newItems});
   }

   handleRemove(i) {
      var newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
   }




   render() {

    var items = this.state.items.map(function(item, i) {
         return (
            <div key = {item} onClick = {this.handleRemove.bind(this, i)}>
               {item}
            </div>
         );
			
      }.bind(this));

        /* //Can be used to display some css animation//
        
        return (
         <div>
            <ReactCSSTransitionGroup transitionName = "example2"
               transitionAppear = {true} transitionAppearTimeout = {2500}
               transitionEnter = {false} transitionLeave = {false}>
					
               <h1>My Element...</h1>
            </ReactCSSTransitionGroup>
         </div>      
      
      );*/
		
      return (
         <div>      
            <button onClick = {this.handleAdd}>Add Item</button>
				
            <ReactCSSTransitionGroup transitionName = "example" 
               transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
               {items}
            </ReactCSSTransitionGroup>
         </div>
      );








    



   }
}

export default App7;