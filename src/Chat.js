import React, { useContext, useEffect, useState } from "react";
import "./Chat.css";
import { Link, useLocation } from "react-router-dom";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AppContext } from "./Context/AppContext";
import Loading from "./Components/Loading";
const Chat = () => {
  const location = useLocation();
  const [username, setUsername] = useState(location?.state?.name);
  const state = useContext(AppContext);
  const [user, setUser] = state.userApi.user;

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    if (user) {
      setFullName(user.firstName + " " + user.lastName);
    }
  }, [user]);

  function createDirectChat(creds) {
    console.log("checking creds " , creds);
    if(location?.state?.name){
      getOrCreateChat(
        creds,
        { is_direct_chat: true, usernames: [username] },
        () => setUsername("")
      );
    }
  }

  function renderChatForm(creds) {
    
	console.log(creds);
    return (  
      <div className="hidden">
        <div>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={createDirectChat(creds)}>Create</button>
        </div>
      </div>
    );
  }
  
  return user ? (<div>
    <Navbar />
    <ChatEngine
      height="100vh"
      userName={user.firstName + " " + user.lastName}
      userSecret="secret-123-jBj02"
      projectID="4da5fd15-bb11-4b42-8974-2f328c50ed77"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
    <Footer />
  </div>) : <Loading/>
    
    
  
};

export default Chat;
