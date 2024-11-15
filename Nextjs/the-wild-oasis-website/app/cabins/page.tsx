import React from "react";
import Counter from "../_components/Counter";

type UserType = {
  name: string;
  id: number;
};

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((user: UserType) => (
          <li key={user.id}>{user.name}</li>
        ))}
        <Counter users={data} />
      </ul>
    </div>
  );
}

export default page;
