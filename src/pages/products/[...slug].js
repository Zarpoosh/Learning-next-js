import { useRouter } from "next/router"

function Products() {
    const router=useRouter()
    console.log(router.query);

    return (
      <div>
        <h1 className="text-4xl font-bold m-3">Products</h1>
      </div>
    );
}

export default Products