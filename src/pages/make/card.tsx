import Head from 'next/head'
import styles from '@/styles/CardEditPage.module.css'
import Header from '@/conponents/Header'
import DisplayCard from '@/conponents/Card'
import { useState } from 'react'
import TextInput from '@/conponents/TextInput'
// import SecondaryBtn from '@/conponents/SecondaryBtn'
// import SwithButton from '@/conponents/SwitchButton'

export default function Index() {
  const hundleOnClickEdit = () => {
    const fieldDoc = {
      field: {
        mycardid: "これ",
        name: name,
        x: x,
        instagram: instagram,
        organizatiton: organization,
        text_color: "#FFF",
        bg_color: "#000",
      }
    };
    console.log(fieldDoc);
  }

  const [name, setName] = useState<string>('');
  const [x, setX] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');

  function hundleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function hundleX(event: React.ChangeEvent<HTMLInputElement>) {
    setX(event.target.value);
  }
  function hundleOrganization(event: React.ChangeEvent<HTMLInputElement>) {
    setOrganization(event.target.value);
  }

  function hundleinstagram(event: React.ChangeEvent<HTMLInputElement>) {
    setInstagram(event.target.value);
  }

  return (
    <>
      <Head>
        <title>Who!</title>
      </Head>
      <main>
        <Header
          onClick_edit={() => hundleOnClickEdit()}
        />

        <div className={styles.preview}>
          プレビュー
        </div>

        <div className={styles.card}>
          <DisplayCard id={""} name={name} organization={organization} x={x} instagram={instagram} others={""} urlEnabled={false} textColor={''} bgColor={''} onClickHandler={function (): void {
            throw new Error('Function not implemented.')
          }} />
        </div>

        <div className={styles.input}>
          <TextInput
            text="氏名"
            value={name}
            onChange={hundleName}
          />
          <TextInput
            text="instagram"
            value={instagram}
            onChange={hundleinstagram}
          />
          <TextInput
            text="X"
            value={x}
            onChange={hundleX}
          />
          <TextInput
            text="所属団体"
            value={organization}
            onChange={hundleOrganization}
          />
        </div>
        <div className={styles.space} />

      </main >
    </>
  )
}
