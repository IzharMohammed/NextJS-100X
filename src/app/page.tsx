import axios from "axios";

interface User {
  username: string,
  email: string
}
async function getUserData() {
  const response = await axios.get('http://localhost:3000/api/user');
  return response.data;
}
export default async function Home() {
  const userData = await getUserData();
  console.log('user data', userData);


  return (
    <>
      <div>{userData.username}</div>
    </>
  );
}
