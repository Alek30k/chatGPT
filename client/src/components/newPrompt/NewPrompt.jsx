import "./newPrompt.css";
import { useEffect, useRef } from "react";

const NewPrompt = () => {
  const endRef = useRef(null);

  useEffect(() => {
    const element = endRef.current;
    element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* ADD NEW CHAT */}
      <div className="endChat" ref={endRef}></div>
      <div className="newPrompt">
        <form className="newForm">
          {/* <Upload setImg={setImg} /> */}
          <label htmlFor="file">
            <img src="/attachment.png" alt="" />
          </label>
          <input id="file" type="file" hidden />
          <input type="text" name="text" placeholder="Ask anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPrompt;
