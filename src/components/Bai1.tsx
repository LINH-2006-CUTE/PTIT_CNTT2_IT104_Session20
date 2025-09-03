import React, { use, useState } from 'react'

function Bai1() {
    const [Text, setText] = useState (``);
    const [error, setError] = useState(``);
    
    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        const textInput = event.target.value;
        setText (textInput);
        if (textInput.length < 5) {
            console.log("chuoi phai lon hon 5 ki tu");
            
        }else {
            setError(``)
        }
        
    }
     
  return (
    <>
    <h3>Kiểm tra độ dài chuỗi nhập vào</h3>
    <label>
        <input type="text" placeholder='Nhập vào đây...' onChange={handleInput} />
    </label>
    <div><p>Số kí tự là: {Text.length}</p></div>

    </>
  )
}

export default Bai1