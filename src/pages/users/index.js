import Link from "next/link";

function UserPage(){
  const users = [
    { id: 1, username:"minoo" },
    { id: 2, username:"romina" },
  ];
    return (
      <div>
        <h2 className="text-4xl font-bold m-3">user page</h2>

        <ul>
          {/* <Link href="/users/1">kimia</Link>     */}
          {users.map((item) => (
            <li key={users.id}>
              {/* <Link href={`/users/${item.id}`}>{item.username}</Link> */}

              <Link href={{
                pathname:"/users/[id]",
                query:{id:item.id}
              }}>{item.username}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default UserPage