import TitleApp from '../TitleApp'
import styles from './styles.module.css'

export default function ConnectWithGithub() {
  return (
    <div
      className={styles.container}
    >
      <TitleApp/>
      <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GH_CLIENT_ID}`}><div className={styles.connectButton}>Login with GitHub</div></a>
      
    </div>
  )
}