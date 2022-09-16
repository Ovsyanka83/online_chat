import React from 'react';




const StartChatButton = ({ nickname }) => {

    function submitHandler() {

        fetch(`http://Localhost:8000/chat/`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nickname: { nickname }
            }),
        })

    }
    return (

        <div>
            <button type="button" className="btn btn-info margin_element_name" onClick={submitHandler}>Ok</button>
        </div>
    );
};

export default StartChatButton;