import React from "react";
import styles from "./FriendList.module.css";
import removeIcon from "./SVGS/removeFriend.svg" 

const friend = [
    {
        id: 1,
        name: "Felipe Daniel",
        username: "Felps",
        img: "https://github.com/FelpsBZ.png",
    },
    {
        id: 2,
        name: "Gabriel Lima", 
        username: "Lima",
        img: "https://github.com/gabriellimao7500.png",
    },
    {
        id: 3,
        name: "Gabriel Ortiz",
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
                
                <img src={friend.img} alt={friend.name} className={styles.imgUser} />
                
                <div className={styles.names}>
                  <h2>{friend.username}</h2>
                  <h3>{friend.name}</h3>
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