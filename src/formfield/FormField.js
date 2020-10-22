import React from 'react';


// class FormField extends React.Component {
//     render() {
//       return (
//           <div>
//             <div className="field">
//                 <label className="label">Name</label>
//             <div className="control">
//                 <input className="input" type="text" placeholder="e.g Alex Smith" />
//             </div>
//             </div>
//             <div className="field">
//                  <label className="label">Email</label>
//             <div className="control">
//                 <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
//             </div>
//             </div>
//         </div>
//       )
//     }
//   }

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        <input className="input" name={props.label} type={props.type} placeholder={props.placeholder}>{props.input}</input>
      </div>
    );
  };


  export default FormField;