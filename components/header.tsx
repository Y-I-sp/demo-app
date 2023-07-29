
import styles from './header.module.css'
import Link from 'next/link'
import {ButtonAppBar} from './AppBar'
export function Header(){
    return (
        <div className={styles.title}> 
        <ButtonAppBar/>
            猫画像アプリ
            <div className={styles.container}>
      <div className={styles.code}><Link href='/Munchikin'>Munchikin</Link></div>
      <div className={styles.code}><Link href='/Bengal'>Bengal</Link></div>
      <div className={styles.code}><Link href="/Snowshoe">Snowshoe</Link></div>
      </div>
        </div>
       
    )
 }
