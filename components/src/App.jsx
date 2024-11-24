import { useState } from 'react';
import like from './assets/like.svg';
import './App.css';

import styles from './post.module.css';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'SEI LA USER',
      userImage:
        'https://blog.bioparquedorio.com.br/wp-content/uploads/2020/11/Abu_filhote_macaco-prego-do-peito-amarelo-BioParquedoRio.jpg',
      postInfo: 'Gato aleatorio  :) ...',
      postContent:
        'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia19863/pelagem-e-dentes-idade-cavalos-artigos-cursos-cpt.jpg',
      likes: 9,
    },
    {
      username: 'SEI LA USER',
      userImage:
        'https://blog.bioparquedorio.com.br/wp-content/uploads/2020/11/Abu_filhote_macaco-prego-do-peito-amarelo-BioParquedoRio.jpg',
      postInfo:
        'Meu nome é gabriel e eu tenho uma jeba do tamanho de uma tromba de elefante, sim isso é BIZARROOOOO!!!!!!',
      postContent: '',
      likes: 9,
    },
  ]);

  function handleLike(index) {
    const updatedPosts = posts.map((post, i) =>
      i === index ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  }

  return (
    <>
      {posts.map((post, index) => (
        <div className={styles.post} key={index}>
          <div className={styles.userInfo}>
            <img
              className={styles.userImage}
              src={post.userImage}
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.username}>{post.username}</div>
          </div>
          <div className={styles.postInfo}>
            <div className={styles.text}>{post.postInfo}</div>
          </div>
          <div className={styles.postContent}>
            {post.postContent && (
              <img className={styles.image} src={post.postContent} alt="" />
            )}
            <div
              className={styles.like} onClick={() => handleLike(index)}>
              <img src={like} alt="like button" />
              {post.likes}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
