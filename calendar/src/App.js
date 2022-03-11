import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Calendar } from './componant/Calendar';

function App() {

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <h1 className='row text-white bg-dark p-2 rounded'>Calendar</h1>
      </div>
      <Calendar />
    </>
  );
}

export default App;
