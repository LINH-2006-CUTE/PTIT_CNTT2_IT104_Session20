import React, { useEffect } from 'react'

function Bai3() {
    useEffect (() => {
       console.log("Component đã được render!!");
       
    }, [])
  return (
    <h3>Chào mừng đến với ứng dụng của chúng tôi</h3>
  )
}

export default Bai3