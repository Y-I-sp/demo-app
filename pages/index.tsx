import type { NextPage } from 'next'
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Loader} from 'semantic-ui-react'
import{ IndexPageProps } from '../components/interface'
import { fetchCatImage } from '../components/initialCat';

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
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      height:"100vh"

    }}>
      <h1>猫画像アプリ</h1>
      {isLoading ? (
        <Loader active size="huge" inline="centered"/>
        ):(<img src={catImageUrl}height="auto"/>
        )}
      
      
      <button style={{ marginTop:18}} onClick={handleClick}>
        今日の猫さん
        </button>
    </div>
  )
}



export default Home
