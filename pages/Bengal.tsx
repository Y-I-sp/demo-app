import type { NextPage } from 'next'
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Loader} from 'semantic-ui-react'
import{ IndexPageProps,SerchCatImage } from '../components/interface'
import type { GetServerSideProps } from 'next'
import { Header } from '../components/BengalHeader';
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Link from 'next/link'

export const fetchCatImage = async ():Promise<SerchCatImage>=>{
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = await res.json();
  // console.log(result[0]);
  return result[0];
}
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
      <Link href='/'>Home</Link>
      <Link href="/Toyger">Toyger</Link>
        
      {isLoading ? (
        <Loader active size="huge" inline="centered"/>
        ):(<img src={catImageUrl}height="auto"/>
        )}
      
      <Button variant="contained" color="success" onClick={handleClick}>今日の猫さん</Button>
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () =>{
  const catImage = await fetchCatImage();
  return{
    props:{
      initialCatImageUrl:catImage.url,
    }
  }
}

export default Home