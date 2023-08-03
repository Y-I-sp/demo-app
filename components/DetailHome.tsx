import {Loader} from 'semantic-ui-react'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import { useState } from 'react';
import{ IndexPageProps,SerchCatImage } from './interface'
import type { GetServerSideProps } from 'next'
import Button from '@mui/material/Button';
type Props={
    breed:string
}
 const fetchCatImage = async (props:Props):Promise<SerchCatImage>=>{
    if( props.breed === 'Bengal'){
        const res = await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=beng");
        const result = await res.json();
        return result[0];
    }
else if(props.breed === 'Munchikin'){
        const res = await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=munc");
        const result = await res.json();
        return result[0];
      }
    else {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=snow");
        const result = await res.json();
        return result[0];
      }
}

   const DetailHome: NextPage<any> = ({initialCatImageUrl}) => {
    
        const [catImageUrl,setCatImageUrl] = useState(initialCatImageUrl);
        const [isLoading,setIsLoading] = useState(false)
      
        const handleClick = async () => {
          setIsLoading(true);
          const catImage = await fetchCatImage();
          setCatImageUrl(catImage.url);
          setIsLoading(false)
        }
   return(
     <div>
         <div className={styles.main}>
                {isLoading ? (<Loader active size="huge" inline="centered"/>):
                             (<img src={catImageUrl}width="1000" height="800"/>)
                }
         </div> 
         <div className={styles.footer}>
          <Button variant="contained" color="success" onClick={handleClick}>今日の猫さん</Button>
         </div>
     </div>
         )
}
   
export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () =>{
        const catImage = await fetchCatImage();
return{
      props:{initialCatImageUrl:catImage.url,}
      }
}
export default DetailHome
