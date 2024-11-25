import styles from './Login.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ Cad }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [incorrect, setIncorrect] = useState(false);
  const [Cadastro, setCadastro] = useState(Cad);

  useEffect(() => {
    sessionStorage.removeItem('user');
    console.log(sessionStorage.getItem('user'));
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3333/login`,
        JSON.stringify({ email, senha: password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (Array.isArray(response.data) && response.data.length === 1) {
        sessionStorage.setItem('user', JSON.stringify(response.data[0]));
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);

        
        navigate('/main');
      } else {
        alert('Credenciais Inválidas');
        setIncorrect(true);
        setTimeout(() => setIncorrect(false), 2000);
      }
    } catch (error) {
      if (!error?.response) {
        alert('Erro ao acessar o servidor');
      } else if (error.response.status === 401) {
        alert('Credenciais Inválidas');
        setIncorrect(true);
        setTimeout(() => setIncorrect(false), 2000);
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3333/register`,
        JSON.stringify({ nome: username, email, senha: password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setCadastro(false);
      alert('Usuário registrado com sucesso!');

      if (response.status === 201) {
        
        
      } else {
        alert('Erro ao registrar o usuário');
      }
    } catch (error) {
      alert('Erro ao registrar o usuário');
      console.error(error);
    }
  };

  function toggleCadastro() {
    setCadastro((prevState) => !prevState);
  }

  return (
    <>
    <div className={incorrect ? styles.error: styles.none}> Credenciais Incorretas!</div>
    <div className={styles.loginCard}>
      {Cadastro ? <h2>Register</h2> : <h2>Login</h2>}
      <form onSubmit={Cadastro ? handleRegister : handleLogin}>
        {Cadastro && (
          <div className={styles.inputGroup}>
            <input
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        <div className={styles.inputGroup}>
          <input
            placeholder="Email"
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
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.btnLogin}>
          <button
            type="button"
            className={styles.createAccountButton}
            onClick={toggleCadastro}
          >
            {Cadastro ? 'Already have an account?' : 'Create account'}
          </button>
          <button className={styles.login} type="submit">
            {Cadastro ? 'Register' : 'Login'}
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Login;
