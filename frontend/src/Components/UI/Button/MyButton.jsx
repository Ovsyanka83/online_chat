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


    function submitHandler(event) {
        event.preventDefault()
        console.log('123')
        fetch(`Localhost:3000/chat`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'fake name'
            }),
        })
            .then(response => response.json())
            .then(json => console.log('Тут хочу получить json, но ничего не приходит', json))

    }




    return (

        <div>
            <button type="button" class="btn btn-info margin_element_name" onClick={() => { handleSubmit(); submitHandler(); }}>Ok</button>
        </div>
    );
};

export default MyButton;