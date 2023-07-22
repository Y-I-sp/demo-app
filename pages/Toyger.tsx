import type { NextPage } from 'next'
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Loader} from 'semantic-ui-react'
import{ IndexPageProps } from '../components/interface'
import { fetchCatImage,getServerSideProps } from '../components/initialCat';
import { Header } from '../components/ToygerHeader';
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Link from 'next/link'
const Home: NextPage<IndexPageProps> = ({initialCatImageUrl}) => {

  const [catImageUrl,setCatImageUrl] = useState(initialCatImageUrl);
  const [isLoading,setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true);
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url);
    setIsLoading(false)
  }

  return (
    
    <div className={styles.main}>
      <Header/>
      <Link href='/Munchikin'>Munchikin</Link>
      <Link href='/Bengal'>Bengal</Link>
      <Link href="/">Home</Link>
        
      {isLoading ? (
        <Loader active size="huge" inline="centered"/>
        ):(<img src={catImageUrl}height="auto"/>
        )}
      
      <Button variant="contained" color="success" onClick={handleClick}>今日の猫さん</Button>
      
    </div>
  )
}



export default Home