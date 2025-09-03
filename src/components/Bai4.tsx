import React, { useEffect, useState } from 'react'

function Bai4() {
    const [name, setName] = useState (``);
    useEffect (()=> {
        document.title = `Chào, ${name}`
    },[name])
  return (
    <div>
        <h3>Chào mừng bạn đến với trang của chúng tôi</h3>
        <label>
            <input type="text" placeholder='Nhập tên của bạn...' onChange={(event) => setName (event.target.value)}/>
        </label>
        <p>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường trên</p>
    </div>
  )
}

export default Bai4