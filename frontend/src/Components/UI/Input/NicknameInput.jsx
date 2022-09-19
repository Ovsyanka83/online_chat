import React from 'react';


const NicknameInput = ({ onChange }) => {


    const handleNameChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <div className="input-group flex-nowrap margin_element_name ">
            <input
                type="text"
                className="form-control maxWidthInut"
                placeholder="Enter your name"
                aria-label="Имя пользователя"
                aria-describedby="addon-wrapping"
                onChange={handleNameChange}
            />
        </div>


    );
};

export default NicknameInput;