import React from 'react';
import Form from './Form';
import { useInputValue } from './Hooks/formHook';

export default App => {
    const text = useInputValue('');
    return (
      <div className="App">
        {/* <Form/> */}
        <input {...text}/>
      </div>
    );
};