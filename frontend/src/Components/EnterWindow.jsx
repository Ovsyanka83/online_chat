import React from 'react';
import { useState } from 'react';
import MyButton from './UI/Button/MyButton';


const EnterWindow = () => {
    const [username, setUsername] = useState('username');
    return (
        <div className='loginWindow'>

            <div className='flexBox'>

                <div class="input-group flex-nowrap">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your name"
                        aria-label="Имя пользователя"
                        aria-describedby="addon-wrapping"
                        value={username}
                        onChange={event => setUsername(event.target.value)} />
                </div>


                <MyButton />
            </div>
        </div>
    );
};

export default EnterWindow;