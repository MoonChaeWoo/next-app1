import ProductCard from "@/components/ProductCard";
import { getServerSession } from "next-auth";
import Link from "next/link"

const Home = async() => {
  const session = await getServerSession();

  return (
    <main>
      <h1>Hello World</h1>
      {session && <h1>{session.user!.name}님 반갑습니다.</h1>}
      <a href="/users">users A tag</a><br></br>
      <Link href="/users">users Link tag</Link>
      <ProductCard />
    </main>
  );
}

export default Home;