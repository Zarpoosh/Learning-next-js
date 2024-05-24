import { useRouter } from "next/router";

function UserPost() {
    const router=useRouter()
    console.log(router.query);
    return (
      <div>
        <h1 className="text-4xl font-bold m-3">UserPost page</h1>
      </div>
    );
}

export default UserPost;
