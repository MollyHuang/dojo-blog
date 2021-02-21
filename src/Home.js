const Home = () => {

  const handleClick = (e) => {
    console.log("hello, there...", e);
  }

  const handleClickAgain = (name, e) => {
    console.log("hello, " + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("Molly", e)}>Click me Again</button>
    </div>    
  );
}
 
export default Home;