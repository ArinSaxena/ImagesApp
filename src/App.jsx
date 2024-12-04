// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

import React from "react";
import ImageDisplay from "./components/ImageDisplay";
import img1 from "./assets/product_14.png";
import img2 from "./assets/product_15.png";
import img3 from "./assets/product_17.png";

import img4 from "./assets/product_28.png";

const sampleImages = [
  { url: img1 , ready: true, error: false },
  { url: img2 , ready:  false, error: true },
  { url: img3 , ready: true, error: false },
  { url: img4 , ready: true, error: false },
]; 

function App() {
  return (
    <div>
      <ImageDisplay name="Sample Gallery" count={sampleImages.length} images={sampleImages} />
    </div>
  );
}

export default App;
