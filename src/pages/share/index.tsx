import { Box } from '@mui/material';
import Head from 'next/head';
import router from 'next/router';
import { useEffect, useState } from 'react';
import DisplayCard from '@/components/Card';
import Header from '@/components/Header';
import PrimaryButton from '@/components/PrimaryButton';
import QRCode from '@/components/QRCode';
import SecondaryButton from '@/components/SecondaryButton';
import useUser from '@/hooks/useUser';
import styles from '@/styles/Share.module.css';
import { CardData } from '@/types/CardData';
import getMyCardDetailsByUserId from '@/utils/ok/getMyCardDetailsByUserId';

export default function Detail() {
  const [cardData, setCardDatas] = useState<CardData[] | null>([]);
  const { userId, loading } = useUser();
  const isSettingCard = cardData?.length === 0;
  useEffect(() => {
    const fetchCards = async () => {
      if (userId) {
        const cardData = await getMyCardDetailsByUserId(userId);
        setCardDatas(cardData);
      }
    };
    fetchCards();
  }, [userId]);

  if (loading || isSettingCard) {
    return (
      <>
        <Head>
          <title>Who!</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <h1>Loading...</h1>
        </main>
      </>
    );
  }

  if (!userId)
    return (
      <main>
        <>
          <Header useMenuIcon />
          <h1>ログインされていません</h1>
          <SecondaryButton text='ログイン画面へ' onClick={() => router.push(`/?nextPage=${router.asPath}`)} />
        </>
      </main>
    );

  if (!cardData)
    return (
      <main>
        <>
          <Header useMenuIcon />
          <h1>自分の名刺がありません</h1>
          <SecondaryButton text='自分の名刺を作成する' onClick={() => router.push('/make/mycard')} />
        </>
      </main>
    );

  const display = cardData.map((data) => {
    if (data.id == router.query.selectedCardId) {
      return (
        <div className={styles.card} key={data.id}>
          <DisplayCard {...data} urlEnabled />
        </div>
      );
    }
  });

  return (
    <>
      6olp
      <Head>
        <title>名刺交換画面 - Who!</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Header useMenuIcon />
          <div className={styles.qrcode}>
            <QRCode url={`${window.location.origin}/card/${router.query.selectedCardId}`} />
          </div>
          <Box sx={{ width: '100%' }}>{display}</Box>
        </div>

        <div className={styles.settingbutton}>
          <PrimaryButton text={'共有する名刺を変更'} onClick={() => router.push('/share/selecting')} />
        </div>

        <div className={styles.returnbutton}>
          <PrimaryButton text={'ホームに戻る'} onClick={() => router.push('/cards')} />
        </div>
      </main>
    </>
  );
}