import { useState } from "react";

function Bai2() {
    const [name, setName] = useState (``);
    const [email, setEmail] = useState(``)

    const handleInputName = (event:React.ChangeEvent<HTMLInputElement>) => {
        const nameInput = event.target.value;
        setName(nameInput);
    }

    const handleInputEmail = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmail (event.target.value)
    }


  return (
    <>
      <h3>Thong tin nguoi dung</h3>

      <form action="">
        <label htmlFor="">
          <input type="text" placeholder="Nhap ten" />
          <br />
          <input type="email" placeholder="Nhap email" />
        </label>
        <br />
        <button type="submit" >Gui</button>
      </form>
    </>
  );
}

export default Bai2;
