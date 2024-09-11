import "./chatPage.css";
import { useEffect, useRef } from "react";
// import NewPrompt from "../../components/newPrompt/NewPrompt";
// import { useQuery } from "@tanstack/react-query";
// import { useLocation } from "react-router-dom";
// import Markdown from "react-markdown";
// import { IKImage } from "imagekitio-react";

const ChatPage = () => {
  // const path = useLocation().pathname;
  // const chatId = path.split("/").pop();

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["chat", chatId],
  //   queryFn: () =>
  //     fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
  //       credentials: "include",
  //     }).then((res) => res.json()),
  // });

  // console.log(data);

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
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
