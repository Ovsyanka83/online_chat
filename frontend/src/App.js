import axios from 'axios';
import { useState } from 'react';
import MyButton from './Components/UI/Button/MyButton';
import MyInput from './Components/UI/Input/MyInput';



function App() {
  const [username, setUsername] = useState('');
  console.log(username)

  return (
    <div className='loginWindow '>
      <div className='flexBox'>
        <MyInput />
        <MyButton />
      </div>
    </div>

  );
}

export default App;
