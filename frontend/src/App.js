import axios from 'axios';
import { useState } from 'react';
import MyButton from './Components/UI/Button/MyButton';
import MyInput from './Components/UI/Input/MyInput';
import EnterWindow from './Components/EnterWindow';


function App() {
  const [username, setUsername] = useState('username');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(['']);

  console.log(username)

  return (
    <EnterWindow />
  );
}

export default App;
