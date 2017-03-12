import React from 'react';

class App extends React.Component {



constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],

         header: "Header from state...",
         content: "Content from state..."
      }
   }


   render() {
        var i = 1;
         var myStyle = {
         fontSize: 100,
         color: '#FF0000'
                   }
      return (
         <div>
            <Header/>
            <Content/>
            <p data-myattribute = "somevalue">This is the content!!!</p>
            <h1>{1+1}</h1>
           
            <h1>{i == 1 ? 'True!' : 'False'}</h1>
             <h1 style = {myStyle}>Header</h1>
        
            {/*Multi line comment..This is also used for single lines...*/}

            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>

             <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            
        {/* For immutable data, use props*/}
            <h1>{this.props.header}</h1>
            <h2>{this.props.content}</h2>
             {/* For immutable data, use props*/}

               {/* For validation of some props, we use the props in App.defaultProps*/}
             <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>
               {/* For validation of some props, we use the props in App.defaultProps*/}

         </div>
      );
   }
}


class Header extends React.Component {
   render() {
       var ola="Adisa";
      return (
         <div>
            <h1>I am the Olaolu Header</h1>
            <h2>{ola}</h2>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>My Content </h2>
            <p>Just putting any content here</p>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

App.defaultProps = {
   header: "Header from props...",
   content:"Content from props...",
   propArray: [1,2,3,4,5],
   propBool: true,
   propFunc: function(e){return e},
   propNumber: 1,
   propString: "String value...",
	
   propObject: {
      objectName1:"objectValue1",
      objectName2: "objectValue2",
      objectName3: "objectValue3"
   }
}

App.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propString: React.PropTypes.string,
   propObject: React.PropTypes.object
}

export default App;