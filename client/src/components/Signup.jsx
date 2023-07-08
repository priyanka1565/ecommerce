import React, { useState } from 'react'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //console.log(name, email, password);

  const collectData = () => {
    console.log(name, email, password);
    
  }
  return (
      <div>
      <input className='inputBox' type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name} />
      <input className='inputBox' type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
      <input className='inputBox' type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={collectData} className='appButton' type='button'>Sign UP</button>
    </div>
  )
}

export default Signup