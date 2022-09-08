import axios from 'axios';
import { useState } from 'react';
import EnterWindow from './Components/EnterWindow';
import MyButton from './Components/UI/Button/MyButton';
import MyInput from './Components/UI/Input/MyInput';



function App() {

  const [username, setUsername] = useState('');
  console.log(username)






  return (
    <EnterWindow />
  );
}

export default App;
