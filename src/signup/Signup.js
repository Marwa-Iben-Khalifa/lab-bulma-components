import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton'

const Signup = () => {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="Password" placeholder="*********" />
        <CoolButton  className="button is-rounded is-small is-danger" name="Submit"></CoolButton>
      </div>
    );
  };
  
  
  export default Signup;