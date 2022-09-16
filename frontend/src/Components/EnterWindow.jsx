import React from 'react';
import { useState } from 'react';
import StartChatButton from './UI/Button/StartChatButton';
import NicknameInput from './UI/Input/NicknameInput';




const EnterWindow = () => {

    const [nickname, setnickname] = useState('');
    const handleNameChange = (nickname) => {
        setnickname(nickname)
    }

    return (
        <div className='loginWindow'>
            <div className='flexBox'>

                <NicknameInput onChange={handleNameChange} />
                <StartChatButton nickname={nickname} />


            </div>
        </div>

    );
};


export default EnterWindow;