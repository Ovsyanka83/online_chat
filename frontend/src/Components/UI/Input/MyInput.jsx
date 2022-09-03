import React from 'react';
import { useState } from 'react';
import classes from "./MyInput.module.css"

const MyInput = (props) => {
    const [username, setUsername] = useState('username');
    return (


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
    );
};

export default MyInput;