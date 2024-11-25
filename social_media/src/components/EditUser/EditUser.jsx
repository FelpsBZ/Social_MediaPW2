import React from "react";
import styles from "./EditUser.module.css";
import editIcon from "./SVGS/edit-icon.svg";

const user = [
    {
        id: 1,
        name: "Felipe Daniel",
        username: "Felps",
        img: "https://github.com/FelpsBZ.png",
    }
]

function EditUser() {
    return (
        <div className={styles.EditUserCard}>
            <div className={styles.InfoUser}>

            {user.map((user, index) => (
                <div key={index} className={styles.ProfileUser}>
                    <img src={user.img} alt=""  className={styles.imgUser}/>
                    <div className={styles.names}>
                        <div>{user.username}</div>
                    </div>
                </div>
                                
            ))}      
                <button className={styles.buttonEdit}>
                    <img src={editIcon} alt="Edit Icon" className={styles.EditIcon} />    
                </button>
            </div>

            <div className={styles.AboutUser}>
                
            </div>

        </div>
    )   
}

export default EditUser;