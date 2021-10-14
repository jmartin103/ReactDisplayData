import ReactDOM from "react-dom";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 32,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chris__sev",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
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
        <img src={user.avatar} alt="Chris on Code" />
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
