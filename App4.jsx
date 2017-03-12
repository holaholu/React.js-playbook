import React from 'react';
import ReactDOM from 'react-dom';

class App4 extends React.Component {

   constructor() {
      super();
		
      this.state = {
         data: 'Parentdata...',
         data2:"Childdata",
         data3:"",
         data4:""
      }

      this.updateState = this.updateState.bind(this);
      this.onClickThenUpdateState = this.onClickThenUpdateState.bind(this);
      this.updateState2 = this.updateState2.bind(this);
      this.onClickThenUpdateState2 = this.onClickThenUpdateState2.bind(this);
       this.clearInput = this.clearInput.bind(this);
    
   };

   clearInput() {
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
   updateState(e) {
      this.setState({data: e.target.value});
   }
    onClickThenUpdateState(e) {
      this.setState({data3:"Data updated from Parent"});
   }

   onClickThenUpdateState2(e) {
      this.setState({data4:"Data updated from Child"});
   }


     updateState2(e) {
      this.setState({data2: e.target.value});
   }

  

   render() {
      return (
         <div>

             {/*For Onchange event*/}
            <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} ref = "myInput"/>
            <h4>{this.state.data}</h4>
               {/*For Unchange event*/}
            <button onClick = {this.clearInput}>CLEAR</button>

         {/*For Onclick event*/}
         <button onClick = {this.onClickThenUpdateState}>CLICK</button>
         <h4>{this.state.data3}</h4>
                   {/*For Onclick event*/}
                


            {/*From Child*/}
             <Content myDataProp = {this.state.data2} 
               updateStateProp = {this.updateState2} 
               myClickFunction={this.onClickThenUpdateState2}
               myClickupdatedata ={this.state.data4}
               ></Content>
                 {/*From Child*/}


         </div>
      );
   }
}

class Content extends React.Component {

   render() {
      return (
         <div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
            <button onClick = {this.props.myClickFunction}>CLICK</button>
         <h3>{this.props.myClickupdatedata}</h3>
         </div>
      );
   }
}


export default App4;