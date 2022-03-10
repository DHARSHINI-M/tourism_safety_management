import './chat.css';
import './home.css';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";

function ChatIndex(params) {
    
    useEffect(() => {
        let script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
        script.async = true;
        script.onload = () => this.scriptLoaded();
        document.body.appendChild(script);
        script = document.createElement("script");
        script.src = "chat.js";
        script.async = true;
        script.onload = () => this.scriptLoaded();
        document.body.appendChild(script);
        script = document.createElement("script");
        script.src = "responses.js";
        script.async = true;
        script.onload = () => this.scriptLoaded();
        document.body.appendChild(script);
        script = document.createElement("script");
        

      }, []);
    return(
    <div className="chat-bar-collapsible">
        <button id="chat-button" type="button" className="collapsible">Chat with us!
            <i id="chat-icon" style={{color: "#fff"}} className="fa fa-fw fa-comments-o"></i>
        </button>

        <div className="content">
            <div className="full-chat-block">
                <div className="outer-container">
                    <div className="chat-container">
                        <div id="chatbox">
                            <h5 id="chat-timestamp"></h5>
                            <p id="botStarterMessage" className="botText"><span>Loading...</span></p>
                        </div>

                        <div className="chat-bar-input-block">
                            <div id="userInput">
                                <input id="textInput" className="input-box" type="text" name="msg"
                                    placeholder="Tap 'Enter' to send a message"/>
                                <p></p>
                            </div>

                            <div className="chat-bar-icons">
                                <i id="chat-icon" style={{color: "crimson"}} className="fa fa-fw fa-heart"
                                    onClick={()=>window.A.heartButton()}
                                    ></i>
                                <i id="chat-icon" style={{color: "#333"}} className="fa fa-fw fa-send"
                                    onClick={()=>window.A.sendButton()}
                                    ></i>
                            </div>
                        </div>

                        <div id="chat-bar-bottom">
                            <p></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
    );
}
export default ChatIndex;