import fs from "fs/promises"
import path from "path";
import Products from "./products/[...slug]";

function ProductDetailPage(props) {
    const {loadedProduct}=props
  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <h1>{loadedProduct.price}</h1>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId=params.pid

   const filePath=path.join(process.cwd(), "data","products.json")
  const jsomData = await fs.readFile(filePath);

  const data=JSON.parse(jsomData)
  const product=data.products.find((item)=>item.id===productId)

  return {
    props: {
      loadedProduct: product,
    }
  };
}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { pid: "p1" } },
        { params: { pid: "p2" } },
        { params: { pid: "p3" } },
      ],
      fallback:false,
    };
}


export default ProductDetailPage