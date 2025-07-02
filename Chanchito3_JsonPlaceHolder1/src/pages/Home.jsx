import { useEffect } from "react";
import { usePostStore } from "../store/posts.store";
import CardList from "../components/CardList";

const Home = () => {
  const posts = usePostStore(state => state.posts);
  const getPosts = usePostStore(state => state.getPosts);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className="container my-4">
      <h2>Últimos posts del blog</h2>
      <CardList data={posts} />
    </section>
  );
};

export default Home;
