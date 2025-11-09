import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className=" container flex flex-col min-w-xl justify-center items-center">
      <h2>QR CODE GENERATOR</h2>
      <img
        alt="QR-Code"
        src="https://placehold.jp/3d4070/ffffff/150x150.png"
      ></img>
      <div>
        <label htmlFor="data">Data for QR Code</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="data">Img Size (e.g., 150)</label>
        <input type="text" />
      </div>
      <div>
        <button className="cursor-pointer">Generate QR Code</button>
        <button className="cursor-pointer">Dowload QR Code</button>
      </div>
    </div>
  );
}

export default App;
