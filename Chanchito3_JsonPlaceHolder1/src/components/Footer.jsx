import { useEffect } from "react";
import { usePostStore } from "../store/posts.store";
import CardList from "./CardList";

const Home = () => {
  const posts = usePostStore((state) => state.posts);
  const getPosts = usePostStore((state) => state.getPosts);

  useEffect(() => {
    getPosts();
  }, [getPosts]); // Dependencia explícita

  return (
    <section className="container my-4">
      <h2 className="mb-4"></h2>
      <CardList data={posts} />
    </section>
  );
};

export default Home;
