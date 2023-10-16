import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/AllCards.module.css'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import router from 'next/router'
import { GetCards } from '@/types/GetCards'
import ShareButton from '@/conponents/ShareButton'

export default function Index() {

  const [datas, setDatas] = useState<GetCards[]>([
    {
      id: "1",
      name: "ゆうか",
      organization: "立命館大学",
      x: "chocolatbrown",
      instagram: "yuka__matcha",
      others: "https://my-portfolio-yukachoco.vercel.app/",
      urlEnabled: true,
      textColor: "#A56A7F",
      bgColor: "#F4EBEF",
      onClickHandler: () => { },
    },
    {
      id: "2",
      name: "こたろう",
      organization: "watnow",
      x: "id",
      instagram: "kkkk",
      others: "https://my-portfolio-yukachoco.vercel.app/",
      urlEnabled: true,
      textColor: "#def190",
      bgColor: "#124c6b",
      onClickHandler: () => { },
    },
    {
      id: "3",
      name: "ゆいぴ",
      organization: "夢の世界",
      x: "xdesu",
      instagram: "jkfla;",
      others: "https://my-portfolio-yukachoco.vercel.app/",
      urlEnabled: true,
      textColor: "#6e6e6d",
      bgColor: "#fad0c9",
      onClickHandler: () => { },
    },
    {
      id: "4",
      name: "けいた",
      organization: "watnow",
      x: "aaaaaaaa",
      instagram: "ffjkdjkfjd",
      others: "https://my-portfolio-yukachoco.vercel.app/",
      urlEnabled: true,
      textColor: "#6338f1",
      bgColor: "#c8fc29",
      onClickHandler: () => { },
    },

  ])

  const display = datas.map((data) => {
    return (
      <DisplayCard
        key={data.id}
        {...data}
        onClickHandler={() => router.push("/card/data.id")}
      />
    );
  })

  return (
    <>
      <Head>
        <title>Who!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header useMenuIcon />

        <div className={styles.cardlist}>
          {display}
        </div>

        <ShareButton id="68nUIBWcWlpw2sJV3wGh" />
      </main>
    </>
  )
}
