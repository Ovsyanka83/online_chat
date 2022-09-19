import React from 'react';
import cl from './PageOnChat.module.css'


const PageOnChat = () => {
    return (
        <div>
            <div className={cl.sideBg} ></div>
            <div className={cl.flexCentr}>
                <div className={cl.centralBlock}>
                </div>
                <div className={cl.downBlockInCentral}>

                    <div class="input-group mb-3">
                        <textarea
                            type="text"
                            class="form-control"
                            placeholder="Enter your message"
                            aria-label="Имя получателя"
                            aria-describedby="basic-addon2"
                            style={{
                                height: '20vh',
                                borderRadius: '30px',
                                marginTop: '-3vh',
                                zIndex: '1'

                            }}
                        />
                        <div class="input-group-append">
                            <button
                                class="btn btn-outline-secondary"
                                type="button"
                                style={{
                                    position: 'absolute',
                                    marginLeft: '-15vh',
                                    marginTop: '10vh',
                                    zIndex: '1'
                                }}
                            >Send</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default PageOnChat;