import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({params}: Props): Promise<Metadata> =>{
  const title = await new Promise(resolve =>{
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 100);
  }); 
  return{
    title: `Products ${title}`,
  }
}

export default function Productdetails({params}: {
    params: {productId: string}
}) {
 return (
   <div>
       <h1> Product Details {params.productId}</h1>
   </div>
 );
}