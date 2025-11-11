import { useState } from "react";
import "./App.css";

function App() {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setqrData] = useState("");
  const [qrSize, setqrSize] = useState("");
  async function generateQr() {
    setLoading(true);
    try {
      const url = ` https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function downloadQr() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qr.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }
  return (
    <div className="container">
      <h2>QR CODE GENERATOR</h2>
      {loading && <p>Please Wait...</p>}
      {img && <img alt="QR-Code" src={img}></img>}
      <div>
        <label className="label">Data for QR Code</label>
        <input
          type="text"
          value={qrData}
          onChange={(e) => setqrData(e.target.value)}
        />
        <label className="label">Img Size (e.g., 150)</label>
        <input
          type="text"
          value={qrSize}
          onChange={(e) => setqrSize(e.target.value)}
        />
      </div>
      <div className="btn">
        <button
          className="cursor-pointer"
          onClick={generateQr}
          disabled={loading}
        >
          Generate QR Code
        </button>
        <button className="cursor-pointer" onClick={downloadQr}>
          Dowload QR Code
        </button>
      </div>
    </div>
  );
}

export default App;
