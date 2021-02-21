import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  //useEffect(async () => {   // this could wait and sync
  useEffect(() => {
    fetch ('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBlogs(data);
      })
  }, []);   // This would run once on the first rendering
  // });   // This would run after every single rendering
  // }, []);   // This would run once on the first rendering

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;