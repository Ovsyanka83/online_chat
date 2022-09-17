import React from 'react';
import { useState } from 'react';
import './StartChatButton.module.css'
import 'animate.css';





const StartChatButton = ({ nickname }) => {
    const [isPostsLoading, setisPostsLoading] = useState(false)



    function submitHandler() {
        setisPostsLoading(true);



        fetch('http://Localhost:8000/chat/', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nickname }),
        })
        setisPostsLoading(false);


    }
    return (

        <div>

            {isPostsLoading
                ? <button type="button" className="btn custom btn-block btn-info margin_element_name animate__animated animate__pulse animate__infinite" onClick={submitHandler}>Loading...</button>
                : <button type="button" className="btn custom btn-block btn-info margin_element_name " onClick={submitHandler}>  Okay  </button>

            }

        </div>
    );
};

export default StartChatButton;