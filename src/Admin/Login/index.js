import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios'

const Login = function() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const checkAdmin = () => {
        if(email && password){
            axios.post('http://localhost:5000/check-admin', {email, password}).then((response) => {
                if(response.data.length === 1) {
                    sessionStorage.setItem("admin", JSON.stringify(response.data))
                    window.location.href = './admin/analytics';
                }else{
                    alert("Incorrect email or password.");
                }
            })
        }
    }

    return (
        <>
        <div style={{ height: '100vh', background: 'linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.5)),url("https://media.discordapp.net/attachments/460892961862057984/943257909918334986/wp5264675-1920x1080-aesthetic-wallpapers.jpg?width=1340&height=754")' }}>
        <div className='row' style={{ margin: '0' }}>
        <div className='col-md-5'></div>
        <div className='col-md-2' style={{  marginTop: '15vh', borderRadius: '20px', padding: '30px 20px', backgroundColor: '#fff' }}>
            <h3>Admin Login</h3>
            <form style={{ textAlign: 'left' }} className='mt-5'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} className='form-control mt-2' />
                </div>
                <div className='form-group mt-2'>
                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} className='form-control mt-2' />
                </div>
                <div className='form-group mt-3'>
                    <button type='button' onClick={() => { checkAdmin() }} className='btn btn-primary' style={{ margin: '0', width: '100%', borderRadius: '20px' }}>Login</button>
                </div>
            </form>
        </div>
        </div>
        </div>
        </>
    );
}

export default Login;