import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { error, isPending, data: blog } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleDelete = (e) => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'Delete'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="blog-details">
      <h2>Blog details - { id }</h2>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;