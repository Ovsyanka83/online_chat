import React from 'react';
import classes from './MyButton.module.css'
import axios from 'axios';

const MyButton = (props) => {
    const handleSubmit = event => {
        axios.get(`http://localhost:8000/ping/83`)
            .then(res => {
                console.log(res.data);
            })
        event.preventDefault();
    }



    return (

        <div>
            <button type="button" class="btn btn-info margin_element_name" onClick={handleSubmit}>Ok</button>
        </div>
    );
};

export default MyButton;