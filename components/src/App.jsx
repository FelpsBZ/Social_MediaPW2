import { useState } from 'react';
import like from './assets/like.svg';
import likeoff from './assets/likeoff.svg'
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
      liked: false,
    },
    {
      username: 'SEI LA USER',
      userImage:
        'https://blog.bioparquedorio.com.br/wp-content/uploads/2020/11/Abu_filhote_macaco-prego-do-peito-amarelo-BioParquedoRio.jpg',
      postInfo:
        'Meu nome é gabriel e eu sou o gabriel mas o gabriel sou eu o gabriel!!!!',
      postContent: '',
      likes: 9,
      liked: false,
    },
  ]);

  function handleLike(index) {
    const updatedPosts = posts.map((post, i) => {
      if (i === index) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked,
        };
      }
      return post;
    });
  
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
              <img className={styles.image} src={post.postContent} onDoubleClick={() => handleLike(index)} alt="" />
            )}
            <div
              className={styles.like} onClick={() => handleLike(index)}>
              <img src={post.liked ? like : likeoff} alt="like button" />
              {post.likes}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
