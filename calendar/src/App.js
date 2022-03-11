import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Calendar } from './componant/Calendar';

function App() {

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <h1>Calendar</h1>
      </div>
      <Calendar />
    </>
  );
}

export default App;
