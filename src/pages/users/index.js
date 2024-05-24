import Link from "next/link";

function UserPage(){
  const users = [
    { id: 1, username: "minoo zarpoosh" },
    { id: 2, username: "romina zapoosh" }
  ];
    return (
      <div>
        <h2 className="text-4xl font-bold m-3">user page</h2>

        <ul>
          {users.map((item)=>{
            <li key={users.id}>
              <h1>
              <Link href={`/users/${item.id}`}>{users.username}</Link>
              </h1>
            </li>
          })}
        </ul>
      </div>
    );
}

export default UserPage