import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} setMovieRating={setMovieRating} />
//       <p>This Movie has Rated {movieRating} star</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} defaultRating={3} />
    <StarRating
      maxRating={5}
      size={50}
      color="red"
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test /> */}
    <App />
  </React.StrictMode>
);
