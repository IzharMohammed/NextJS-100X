import axios from "axios";

interface User {
  title: string
}
async function getUserData() {
  const response = await axios.get('https://backend.izharmohammed21.workers.dev/api/v1/allBlogs');
  return response.data;
}
export default async function Home() {
  const userData = await getUserData();
  console.log(userData);


  return (
    <>
      {
        userData.map((user: User) => (
          <li>{user.title}</li>
        ))
      }
    </>
  );
}
