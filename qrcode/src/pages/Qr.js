import React, { useState } from "react";
import QrCode from "qrcode.react";
import env from "react-dotenv";
function Qr() {
  const [RollNumber, setRollNumber] = useState("2010991907");
  const [imageSrc, setImageSrc] = useState(
    
  );
  const changeRollNumber = async () => {
    const imageChange = `${env.DEV_DOMAIN}/data/${RollNumber}`;
    setImageSrc(imageChange);
  };
  return (
    <div>
      <div class="input_container">
        <span> GENERATE YOUR QR OF ROLL NUMBER</span>
        <div class="input_box">
          <input
            type="text"
            value={RollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          ></input>
        </div>
        <div class="submit_box">
          <button onClick={changeRollNumber}>Click</button>
        </div>
      </div>
      <QrCode value={imageSrc} />
      <p>
        <a></a>
        {imageSrc}
      </p>
    </div>
  );
}

export default Qr;
