import React from 'react';
import Form from './Form';
import { useInputValue } from './Hooks/formHook';
import { useFetch } from './Hooks/fetchHook';

export default App => {
  // custom hook user input
  const text = useInputValue('');

  // custom hook fetching data
  const { data, loading } = useFetch("https://api.randomuser.me/");

    return (
      <div className="App">
        {/* <Form/> */}
        <input {...text}/>
        {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
      </div>
    );
};