import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HEADER from './components/Header/Header';
import EDITUSER from './components/EditUser/EditUser';
import CREATEPOSTS from './components/CreatePosts/CreatePosts';
import FRIENDLIST from './components/FriendList/FriendList';
import POST from './components/Posts/Post';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HEADER></HEADER>
      <div className="main">
      <EDITUSER></EDITUSER>
      <div className='center'>
      <CREATEPOSTS></CREATEPOSTS>
      <POST></POST>
      </div>
      <FRIENDLIST></FRIENDLIST>
      </div>
    </>
  )
}

export default App
