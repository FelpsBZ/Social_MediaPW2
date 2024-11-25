import styles from './Login.module.css'
import React, { useState } from 'react';

function Login({ Cad }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [incorrect, setIncorrect] = useState(false)
    const [Cadastro, setCadastro] = useState(Cad)

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formulário enviado!');
    };

    function setLogin(){
        if(Cadastro){
            setCadastro(false)
        }else{
            setCadastro(true)
        }
    }

    return (
        <div className={styles.loginCard}>
          {Cadastro ? (<h2>Register</h2>) : (<h2>Login</h2>)}
          <form onSubmit={handleSubmit}>
          {Cadastro ? (
            <div className={styles.inputGroup}>
              <input
                placeholder='Username'
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            ) : (<></>)}
            <div className={styles.inputGroup}>
              <input
                placeholder='Email'
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                placeholder='Password'
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.btnLogin}>
              <button className={styles.createAccountButton} onClick={setLogin}>
                {Cadastro ? (<>already have an account</>) : (<>Create account</>)}
              </button>
              <button className={styles.login} type="submit">
                {Cadastro ? (<>Register</>) : (<>Login</>)}
              </button> 
            </div>
          </form>
        </div>
      );
      
}

export default Login