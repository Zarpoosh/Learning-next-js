import { Inter } from "next/font/google";
import Link from "next/link";
import  fs from "fs/promises"
import path from "path";

export default function Home(props) {
  const{products}=props
  return (
    <div>
      <h2 className="text-4xl font-bold m-3">Home page</h2>

      <ul>
        {products.map((item)=>(
          // <li key={item.id}>{item.title}</li>
          <li key={item.id}>
            <Link href={`/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


// ! It runs this first   هرچی تو این تابع باشه روی سرور داره اجرا میشه
export async function getStaticProps() {
  const filePath=path.join(process.cwd(), "data","products.json")
  const jsomData = await fs.readFile(filePath);

  const data=JSON.parse(jsomData)
  return {
    props: {
      // products: [
      //   { id: "p1", title: "book1" },
      //   { id: "p2", title: "book2" },
      // ],

      products:data.products
    },
  };
}
