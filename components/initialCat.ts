import type { GetServerSideProps } from 'next'
import type{SerchCatImage} from '../components/interface'
interface IndexPageProps{
    initialCatImageUrl:string
    }

 export const fetchCatImage = async ():Promise<SerchCatImage>=>{
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const result = await res.json();
        // console.log(result[0]);
        return result[0];
      }

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () =>{
    const catImage = await fetchCatImage();
    return{
      props:{
        initialCatImageUrl:catImage.url,
      }
    }
  }