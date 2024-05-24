import { useRouter } from "next/router"


function UserId() {
    const router=useRouter()

    console.log("pathname=======>>.", router.pathname);
    console.log("query ======>> ", router.query);
    return (
      <div>
        <h1 className="text-4xl font-bold m-3">user id</h1>
      </div>
    );
}

export default UserId