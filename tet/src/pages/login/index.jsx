import React, { useState } from 'react';
import axios from 'axios';
import './index.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    name: '',
    password: '',
  });

  const navigate = useNavigate();

  const log = async () => {
    const { name, password } = loginInfo;
    if (!name || !password) {
      alert("Please fill in both fields");
      return;
    }

    try {
      const res = await axios.post("", loginInfo); // ✅ Set correct endpoint

      if (!res || !res.data) {
        alert("Login failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");

    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in");
    }
  };

  return (
    <section className='log'>
      <div className='container'>
        <div className='par'>
          <h2>Login</h2>
        </div>
        <div className='all'>
          <div className='name'>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setLoginInfo({ ...loginInfo, name: e.target.value })}
            />
          </div>
          <div className='password'>
            <input
              type='password'
              placeholder="Password"
              onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
            />
          </div>
          <button onClick={log}>Login</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
