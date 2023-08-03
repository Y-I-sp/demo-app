import styles from './header.module.css'
import {ButtonAppBar} from './AppBar'
import Link from 'next/link'
type Props={
    breed:string
}
export function DetailHeader(props:Props){
  if(props.breed === 'Munchikin')
    return(
      <div className={styles.title}>
        <ButtonAppBar/>
          マンチカン
        <div className={styles.container}>
           <div className={styles.code}><Link href = '/' >Home</Link></div>
           <div className={styles.code}><Link href = '/Bengal'>Bengal</Link></div>
           <div className={styles.code}><Link href = '/Snowshoe'>Snowshoe</Link></div>
        </div>
      </div>
          )
  else if(props.breed === 'Bengal')
    return(
      <div className={styles.title}>
        <ButtonAppBar/>
          ベンガル
        <div className={styles.container}>
           <div className={styles.code}><Link href = '/Munchikin' >Munchikin</Link></div>
           <div className={styles.code}><Link href = '/'>Home</Link></div>
           <div className={styles.code}><Link href = '/Snowshoe'>Snowshoe</Link></div>
        </div>
      </div>
          )
          if(props.breed === 'Snowshoe')
    return(
      <div className={styles.title}>
        <ButtonAppBar/>
          スノーシュー
        <div className={styles.container}>
           <div className={styles.code}><Link href = '/Munchikin' >Munchikin</Link></div>
           <div className={styles.code}><Link href = '/Bengal'>Bengal</Link></div>
           <div className={styles.code}><Link href = '/'>Home</Link></div>
        </div>
      </div>
          )
        else
          return(
      <div className={styles.title}>
        <ButtonAppBar/>
           猫画像アプリ
         <div className={styles.container}>
           <div className={styles.code}><Link href = '/Munchikin' >Munchikin</Link></div>
           <div className={styles.code}><Link href = '/Bengal'>Bengal</Link></div>
           <div className={styles.code}><Link href = '/Snowshoe'>Snowshoe</Link></div>
         </div>
      </div>
          )
}
