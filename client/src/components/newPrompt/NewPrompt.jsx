import "./newPrompt.css";

const NewPrompt = () => {
  return (
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
  );
};

export default NewPrompt;
