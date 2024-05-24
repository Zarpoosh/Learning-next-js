import { useRouter } from "next/router"


function UserId() {
    const router=useRouter()

    console.log("pathname=======>>.", router.pathname);
    console.log("query ======>> ", router.query);

    function showUserId() {
        // router.push("/users/minoo")

        router.push({
            pathname:"/users/[id]",
            query:{id:"minoo"}
        })
    }

    return (
      <div>
        <h1 className="text-4xl font-bold m-3">user id</h1>
        <button className="bg-green-400 p-3 rounded-md text-black" onClick={showUserId}>show UserId</button>
      </div>
    );
}

export default UserId