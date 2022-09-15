import React from 'react';
import classes from './MyButton.module.css'



const MyButton = ({ username }) => {



    //transfer to the server
    function submitHandler() {
        console.log('Проверка работы функции')
        console.log({ username })
        fetch(`http://Localhost:3000/chat`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: { username }
            }),
        })
        // .then(response => response.json())
        // .then(json => console.log('', json))

    }




    return (

        <div>
            <button type="button" className="btn btn-info margin_element_name" onClick={submitHandler}>Ok</button>
        </div>
    );
};

export default MyButton;