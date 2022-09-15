import React from 'react';
import classes from './MyButton.module.css'



const MyButton = ({ nickname }) => {




    function submitHandler() {


        fetch(`http://Localhost:3000/chat`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: { nickname }
            }),
        })

    }




    return (

        <div>
            <button type="button" className="btn btn-info margin_element_name" onClick={submitHandler}>Ok</button>
        </div>
    );
};

export default MyButton;