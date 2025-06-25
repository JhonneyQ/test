import React, { useState } from 'react';
import axios from 'axios';
import './index.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [regInfo, setregInfo] = useState({
    name: '',
    password: '',
    email: '',
    surname: "",
    passwordConfirm: "",
    username:""
  });

  const navigate = useNavigate();

  const reg = async () => {
    if (!regInfo.name || !regInfo.email || !regInfo.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("https://nihadrs-001-site1.jtempurl.com/api/Users", regInfo);
      if (res.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <section className='reg'>
      <div className='container'>
        <div className='par'>
          <h2>Register</h2>
        </div>
        <div className='all'>
          <div className='name'>
            <input
              type="text"
              placeholder="Name"
              value={regInfo.name}
              onChange={(e) => setregInfo({ ...regInfo, name: e.target.value })}
            />
          </div>
          <div className='surnamename'>
            <input
              type="text"
              placeholder="surname"
              value={regInfo.surname}
              onChange={(e) => setregInfo({ ...regInfo, surname: e.target.value })}
            />
          </div>
          <div className='username'>
            <input
              type="text"
              placeholder="username"
              value={regInfo.username}
              onChange={(e) => setregInfo({ ...regInfo, username: e.target.value })}
            />
          </div>
          <div className='password'>
            <input
              type='password'
              placeholder="Password"
              value={regInfo.password}
              onChange={(e) => setregInfo({ ...regInfo, password: e.target.value })}
            />
          </div>
           <div className='passwordConfirm'>
            <input
              type='password'
              placeholder="ConfirmPassword"
              value={regInfo.passwordConfirm}
              onChange={(e) => setregInfo({ ...regInfo, passwordConfirm: e.target.value })}
            />
          </div>
          <div className='email'>
            <input
              type='email'
              placeholder="Email"
              value={regInfo.email}
              onChange={(e) => setregInfo({ ...regInfo, email: e.target.value })}
            />
          </div>
          <button onClick={reg}>Register</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
