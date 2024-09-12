import NewPrompt from "../../components/newPrompt/NewPrompt";
import "./chatPage.css";
import { useEffect, useRef } from "react";

const ChatPage = () => {
  const endRef = useRef(null);

  useEffect(() => {
    const element = endRef.current;
    element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>{" "}
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>{" "}
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>{" "}
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>{" "}
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>{" "}
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>{" "}
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>{" "}
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>{" "}
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>{" "}
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <div className="message">message from ia</div>
          <div className="message user">message from user</div>
          <NewPrompt />
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
