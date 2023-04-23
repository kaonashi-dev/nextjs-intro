import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  id: string;
}

async function fetchUser(id: string) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await response.json();
  return data;
}

const UserDatails: GetServerSideProps = async (context) => {

  const { id } = context.params as Params;
  const userInfo = await fetchUser(id);

  return (
    <div className="container mx-auto my-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <div>UserDatails</div>
      <h3>{userInfo.first_name} {userInfo.last_name}</h3>
      <p>{userInfo.email}</p>
      <img src={userInfo.avatar} alt={userInfo.first_name} />
    </div>
  )
}

export default UserDatails;