import { redirect } from "next/navigation";

const Home = () => {
  redirect("/movie");

  return null;
};

export default Home;
