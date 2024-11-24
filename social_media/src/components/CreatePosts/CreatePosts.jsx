import React from "react";
import styles from "./CreatePosts.module.css";
import imageIcon from "./SVGS/image.svg";
import clipIcon from "./SVGS/clip.svg";

const user = [
   {
       id: 1,
       name: "Felipe Daniel",
       username: "Felps",
       img: "https://github.com/FelpsBZ.png",
   }
]

function CREATEPOSTS() {
    return (
        <>
        <div className={styles.CreatePosts}>
           <div className={styles.textPost}>
            {user.map((user, index) => (
                <div key={index} className={styles.imgUser}>
                    <img src={user.img} alt={user.name}  className={styles.imgUser}/>
                </div>
            ))}

               <input type="text" placeholder="What's on your mind?" className={styles.inputPost} />
           </div>
           <div className={styles.typePost}>
               <div className={styles.postImage}>
                   <img src={imageIcon} alt="" />
                   <p>Image</p>
               </div>
               <div className={styles.postClip}>
                   <img src={clipIcon} alt="" />
                   <p>Clip</p>
               </div>

               <button className={styles.postButton}>POST</button>

           </div>
        </div> 
        </>
    );
}



export default CREATEPOSTS;