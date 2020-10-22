import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton'
import Signup from './signup/Signup'


const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton  className="button is-rounded is-small is-danger" name="Button 1"></CoolButton>
      <CoolButton className="button is-success is-small" name="Button 2" onClick=""></CoolButton>
    </div>
  );
};


export default App;
