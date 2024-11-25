import React from "react";
import styles from "./FriendList.module.css";
import removeIcon from "./SVGS/removeFriend.svg" 

const friend = [
    {
        id: 1,
        username: "Felps",
        img: "https://github.com/FelpsBZ.png",
    },
    {
        id: 2,
        username: "Lima",
        img: "https://github.com/gabriellimao7500.png",
    },
    {
        id: 3,
        username: "Ortiz",
        img: "https://github.com/GMarsura.png",
    },
    {
      id: 1,
      username: "Felps",
      img: "https://github.com/FelpsBZ.png",
  },
  {
      id: 2,
      username: "Lima",
      img: "https://github.com/gabriellimao7500.png",
  },
  {
      id: 3,
      username: "Ortiz",
      img: "https://github.com/GMarsura.png",
  },
  {
    id: 1,
    username: "Felps",
    img: "https://github.com/FelpsBZ.png",
},
{
    id: 2,
    username: "Lima",
    img: "https://github.com/gabriellimao7500.png",
},
{
    id: 3,
    username: "Ortiz",
    img: "https://github.com/GMarsura.png",
}
]

function FRIENDLIST() {
    return (
        <div className={styles.cardFriends}>
          <h1 className={styles.titleFriends}>Friend List</h1>

          <div className={styles.friends}>

            {friend.map((friend, index) => (
              <div key={index} className={styles.friend}>
                
                <div className={styles.user}>
                  <img src={friend.img} alt={friend.name} className={styles.imgUser} />
                  <div className={styles.h2}>{friend.username}</div>
                </div>

                <button className={styles.removeButton} onClick={() => removeFriend(friend.id)}>
                    <img src={removeIcon} alt=""  className={styles.removeIcon}/>
                </button>
              </div>
            ))}

          </div>
        </div>
      );
}

export default FRIENDLIST;                                                                          