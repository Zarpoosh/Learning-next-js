import fs from "fs/promises"
import path from "path";
import Products from "./products/[...slug]";
import { pid } from "process";

function ProductDetailPage(props) {
    const {loadedProduct}=props

    if(!loadedProduct){
        return <p>loasing....</p>
    }
  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <h1>{loadedProduct.price}</h1>
    </div>
  );
}
async function getData(){
     const filePath = path.join(process.cwd(), "data", "products.json");
     const jsomData = await fs.readFile(filePath);
     const data = JSON.parse(jsomData);
    return data
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId=params.pid
    const data=await getData()
  
  const product=data.products.find((item)=>item.id===productId)

  return {
    props: {
      loadedProduct: product,
    }
  };
}


// * pre render میشن id , name  و کلا اطلاعات رو به شکل داینامیکه نمایش میدیم از سمت سرور به شکل فایل جیسون میگیریم .یه صفحه داریم فقط ایدی هاش تغییر میکنه
export async function getStaticPaths() {
    const data=await getData()
    const ids=data.products.map((item)=>item.id)

    const params=ids.map((item)=>({params:{pid:item}}))
    return {
      paths: params,
      fallback:false,
    };
}


export default ProductDetailPage