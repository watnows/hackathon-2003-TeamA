import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
import SinpleButton from '@/conponents/SimpleButton'
import get from '@/utils/firebase/firestore'
import setUserData from '@/utils/firebase/setUserData'
import AddMyCard from '@/utils/firebase/addMyCard'
import AddHaveCard from '@/utils/firebase/addHaveCard'
const inter = Inter({ subsets: ['latin'] })
import firestore from '@/utils/firebase/firestore'
import getHaveCards from '@/utils/firebase/getHaveCards'
import getMyCarddetail from '@/utils/firebase/getMyCarddetail'


export default function Login() {
  const docData = {
    userid: "68nUIBWcWlpw2sJV3wGh",
    cardid:"これ",
  };
  return(
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>LoginPage</h1>

          

          {/*　userのhave_cardsに追加 */}
          <button onClick={()=>getMyCarddetail(docData)}>getdetails</button>

          
          
        </div>
      </main>
    </>
  )
 
}
