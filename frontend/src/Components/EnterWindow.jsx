import React from 'react';
import { useState } from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';




const EnterWindow = () => {

    const [nickname, setnickname] = useState('');
    const handleNameChange = (nickname) => {
        setnickname(nickname)
    }

    return (
        <div className='loginWindow'>
            <div className='flexBox'>

                <MyInput onChange={handleNameChange} />
                <MyButton nickname={{ nickname }} />

            </div>
        </div>

    );
};


export default EnterWindow;