import { useState } from "react";
import "./css/Bai2.css"; 

function Bai2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    setSubmit(true);
  };

  return (
    <div className="container">
      <h3>Thông tin người dùng</h3>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Nhập tên"
          onChange={(event) => setName(event.target.value)}
          className="input"
        />
        <input
          type="email"
          placeholder="Nhập email"
          onChange={(event) => setEmail(event.target.value)}
          className="input"
        />
        <button type="submit" className="btn">Gửi</button>
      </form>

      {submit && (
        <div className="result">
          <p>Tên: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default Bai2;
