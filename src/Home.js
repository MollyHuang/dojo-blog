import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  //useEffect(async () => {   // this could wait and sync
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      })
    }, 1000);
  }, []);   // This would run once on the first rendering
  // });   // This would run after every single rendering
  // }, []);   // This would run once on the first rendering

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
    </div>
  );
}
 
export default Home;