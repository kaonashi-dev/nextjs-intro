import Users from "@/components/Users";

async function fetchData() {
  const reponse = await fetch('https://reqres.in/api/users');
  const { data } = await reponse.json();
  console.log(data);
  return data;
}

async function Home() {

  const data = await fetchData();

  return (
    <div>
      <h1>Home Page</h1>
      <Users users={data} />
    </div>
  );
};

export default Home;