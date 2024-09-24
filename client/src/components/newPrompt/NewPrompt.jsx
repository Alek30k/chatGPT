import { IKImage } from "imagekitio-react";
import Upload from "../upload/Upload";
import "./newPrompt.css";
import { useEffect, useRef, useState } from "react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";

const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  // const chat = model.startChat({
  //   history: [
  //     data?.history.map(({ role, parts }) => ({
  //       role,
  //       parts: [{ text: parts[0].text }],
  //     })),
  //   ],
  //   generationConfig: {
  //     // maxOutputTokens: 100,
  //   },
  // });

  const endRef = useRef(null);

  useEffect(() => {
    const element = endRef.current;
    element.scrollIntoView({ behavior: "smooth" });
  }, [question, answer, img.dbData]);

  const add = async (text) => {
    setQuestion(text);

    const result = await model.generateContent(
      Object.entries(img.aiData).length ? [img.aiData, text] : [text]
    );
    const response = await result.response;
    setAnswer(response.text());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;
    if (!text) return;

    add(text);
  };

  return (
    <>
      ADD NEW CHAT
      {img.isLoading && <div className="">Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}
      {question && <div className="message user">{question}</div>}
      {answer && (
        <div className="message">
          <Markdown>{answer}</Markdown>
        </div>
      )}{" "}
      <div className="endChat" ref={endRef}></div>
      <div className="newPrompt">
        <form className="newForm" onSubmit={handleSubmit}>
          <Upload setImg={setImg} />

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
