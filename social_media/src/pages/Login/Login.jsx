import LOGIN from '../../components/Login/Login'
import styles from "./Login.module.css"
function Login(){
    return(
        <div className={styles.body}>
            <LOGIN Cad={false}></LOGIN>
        </div>
    )
}

export default Login