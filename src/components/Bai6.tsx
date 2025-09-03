import React, { useState, useRef, useEffect } from "react";
import "./css/Bai6.css";

function Bai6() {
  const [openModal, setOpenModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (openModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openModal]);

  return (
    <div className="app-container">
      <h3 className="title">Ứng dụng React với Modal và Focus Input</h3>
      <button className="btn btn-open" onClick={() => setOpenModal(true)}>
        Mở Modal
      </button>

      {openModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h4 className="modal-title">Đăng nhập</h4>
            <input
              ref={inputRef}
              type="text"
              placeholder="Nhập tên người dùng"
              className="modal-input"
            />
            <button
              className="btn btn-close"
              onClick={() => setOpenModal(false)}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bai6;
