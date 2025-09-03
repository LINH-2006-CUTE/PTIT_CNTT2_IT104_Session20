import React, {useEffect, useState} from 'react'

function Bai5() {
    const [time, setTime] = useState(0)
    useEffect(()=> {
        // setTimeout(()=>{
        //     setTime ((time)=> time + 1)
        // },1000);    
        const interval = setInterval (()=> {
            setTime ((time)=> time + 1)
        },1000); 

                return () => clearInterval( interval)
        }, [])


  return  (
    <>
    <h3>Đếm thời gian:{time}</h3>
    </>
  )
}

export default Bai5