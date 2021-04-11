import React, {useEffect, useState} from 'react'

export default function UseEffectDemo() {

    const [number, setNumber] = useState(1);
    const [name, setName] = useState('cybersoft');

    useEffect(() => {
       console.log('componentDidMount');
       // hàm sẽ thực thi sau khi giao diện render (thường gọi ajax, hoặc chèn thư viện thứ 3 vào)
       return () => {
           // Hàm này sẽ thực thi trước khi component mất đi khỏi giao diện
           console.log('componentDidMount')
       }
    }, [])

    // useEffect(() => {
    //     console.log('componentDidMount & componentUpdate');
    //  })

    useEffect(() => {
        console.log('componentDidUpdate');
        // Có thể set lại các state khác trừ number
    }, [number]) // khi numbere thay đổi thì hàm sẽ được gọi lại

    return (
        <div>
            <h1>{number}</h1>
            <button className="btn btn-success" onClick={()=>{
                {setNumber(number+1)}
            }}>+</button>
            <h1>{name}</h1>
            <button className="btn btn-info" onClick={()=>{
                {setName('frontend58')}
            }}>set name</button>
        </div>
    )
}
