import React from 'react';
import { useState } from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';



const EnterWindow = () => {
    const [username, setUsername] = useState('');
    console.log(username)
    return (
        <div className='loginWindow'>
            <div className='flexBox'>
                <MyInput />
                <MyButton />
            </div>
        </div>

    );
};

export default EnterWindow;