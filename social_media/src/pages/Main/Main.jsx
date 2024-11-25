import { useState } from 'react'
import './Main.css'
import HEADER from '../../components/Header/Header';
import EDITUSER from '../../components/EditUser/EditUser';
import CREATEPOSTS from '../../components/CreatePosts/CreatePosts';
import FRIENDLIST from '../../components/FriendList/FriendList';
import POST from '../../components/Posts/Post';

function Main() {
  const [count, setCount] = useState(0)

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