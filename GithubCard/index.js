import TitleApp from '../TitleApp'
import styles from './styles.module.css'

export default function GithubCard({ githubData }) {
  return (
    <div
      className={styles.container}
    >
      <TitleApp/>
      <div className={styles.picture}><img src={githubData.avatar_url}></img></div>
      <div className={styles.spacer10px} />
      <div className={styles.displayName}>{githubData.name}</div>
      <div className={styles.handle}>@{githubData.login}</div>
      <div>{githubData.location}</div>
      <div className={styles.spacer10px} />
      <div>{githubData.bio}</div>
      <div className={styles.spacer10px} />
      <div className={styles.spacer10px} />
      <textarea className={styles.moreInfo} value={`# Payload fetched from GitHub /user endpoint:\n ${JSON.stringify(githubData, null, 2)}`} />
      <div className={styles.spacer10px} />
      <a href='/api/logout'><div className={styles.logoutButton}>Logout</div></a>
      <div className={styles.spacer10px} />
      <a href={`https://github.com/settings/connections/applications/${process.env.NEXT_PUBLIC_GH_CLIENT_ID}`}><div className={styles.revokeButton}>Manage access</div></a>
    </div>
  )
}