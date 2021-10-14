import ReactDOM from "react-dom";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "John Martin",
  location: "Atlanta",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "JohnMar76462157"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <h3>{user.name}</h3>
        <strong>Location</strong>
        <p>{user.location}</p>
        <strong>Eats</strong>
        <p>{user.foodType}</p>
        <strong>Age</strong>
        <p>{user.age}</p>
        <strong>Likes</strong>
        <p>{user.likes}</p>
        <strong>Twitter</strong>
        <a href={`https://www.twitter.com/@${user.twitterUsername}`}>
          @{user.twitterUsername}
        </a>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
