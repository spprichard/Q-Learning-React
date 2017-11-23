import React, { Component } from 'react';

// class HelloWorld extends Component {
//   render(props) {
//     return (
//       <div className="HelloWorld">
//         <h1>Hello {props.name}!</h1>
//       </div>
//     );
//   }
// }

const HelloWorld = (props) => {
  return (
    <div className="HelloWorld">
      <h1>Hello {props.name}!</h1>
    </div>
  );
}

export default HelloWorld;
