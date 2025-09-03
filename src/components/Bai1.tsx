import React, { useState } from "react";

function Bai1() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const textInput = event.target.value;
    setText(textInput);

    if (textInput.length > 5) {
      setError("Chuỗi nhập vào dài hơn 5 ký tự!");
    } else {
      setError(""); 
    }
  };

  return (
    <div>
      <h3>Kiểm tra độ dài chuỗi nhập vào</h3>
      <label>
        <input
          type="text"
          placeholder="Nhập vào đây..."
          onChange={handleInput}
          value={text}
        />
      </label>

      <div>
        <p>Số kí tự là: {text.length}</p>
      </div>

      {error && (
        <div
          style={{
            marginTop: "10px",
            padding: "8px",
            border: "1px solid red",
            backgroundColor: "#bd9393ff",
            color: "red",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}

export default Bai1;
