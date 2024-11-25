import { useState } from 'react'
import './Main.css'
import HEADER from '../../components/Header/Header';
import EDITUSER from '../../components/EditUser/EditUser';
import CREATEPOSTS from '../../components/CreatePosts/CreatePosts';
import FRIENDLIST from '../../components/FriendList/FriendList';
import POST from '../../components/Posts/Post';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Main() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)

  /*
  useEffect(() => {
    if(!sessionStorage.getItem('user')){
      navigate('/')
    }
  }, []);
  */
  return (
    <>
      <HEADER></HEADER>
      <div className="main">
      <EDITUSER></EDITUSER>
      <div className='center'>
    <div className='postagens'>
        <CREATEPOSTS></CREATEPOSTS>
        <POST></POST>
    </div>
      
      </div>
      <FRIENDLIST></FRIENDLIST>
      </div>
    </>
  )
}

export default Main
