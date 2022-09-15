import React from 'react';
import { useState } from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';




const EnterWindow = () => {

    const [username, setUsername] = useState('');
    const handleNameChange = (username) => {
        setUsername(username)
    }

    return (
        <div className='loginWindow'>
            <div className='flexBox'>
                {/* transfer of components */}
                <MyInput onChange={handleNameChange} />
                <MyButton username={{ username }} />

            </div>
        </div>

    );
};


export default EnterWindow;