import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EnterWindow from './Components/EnterWindow';
import PageOnChat from './Components/Page/PageOnChat';




function App() {

  return (
    <Routes>
      <Route path='/' element={<EnterWindow />} />
      <Route path='/chat' element={<PageOnChat />} />
    </Routes>
  );
}

export default App;
