import React, { useState } from "react";
import axios from "axios";
import config from "./config.json";

const CarPredictionComponent = () => {
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [paintChange, setPaintChange] = useState("");
  const [traction, setTraction] = useState("");
  const [rearBumper, setRearBumper] = useState("");
  const [rightFrontFender, setRightFrontFender] = useState("");
  const [leftFrontFender, setLeftFrontFender] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [brand, setBrand] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmissionType, setTransmissionType] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [frontBumper, setFrontBumper] = useState("");
  const [rearHood, setRearHood] = useState("");
  const [leftRearDoor, setLeftRearDoor] = useState("");
  const [leftFrontDoor, setLeftFrontDoor] = useState("");
  const [rightFrontDoor, setRightFrontDoor] = useState("");
  const [rightRearDoor, setRightRearDoor] = useState("");
  const [series, setSeries] = useState("");
  const [rightRearFender, setRightRearFender] = useState("");
  const [leftRearFender, setLeftRearFender] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleChange = (setStateFunc) => (e) => {
    setStateFunc(e.target.value);
  };

  const makePrediction = async () => {
    try {
      const response = await axios.post(config.carApiUrl, {
        api_key: config.api_key,
        data: {
          Yıl: parseInt(year),
          Model: parseInt(model),
          Renk: parseInt(color),
          "Boya-değişen": parseFloat(paintChange),
          Çekiş: parseFloat(traction),
          "Arka Tampon": parseFloat(rearBumper),
          "Sağ Ön Çamurluk": parseFloat(rightFrontFender),
          "Sol Ön Çamurluk": parseFloat(leftFrontFender),
          Kilometre: parseInt(kilometers),
          Marka: parseInt(brand),
          "Yakıt Tipi": parseFloat(fuelType),
          "Vites Tipi": parseFloat(transmissionType),
          "Kasa Tipi": parseFloat(bodyType),
          "Ön Tampon": parseFloat(frontBumper),
          "Arka Kaput": parseFloat(rearHood),
          "Sol Arka Kapı": parseFloat(leftRearDoor),
          "Sol Ön Kapı": parseFloat(leftFrontDoor),
          "Sağ Ön Kapı": parseFloat(rightFrontDoor),
          "Sağ Arka Kapı": parseFloat(rightRearDoor),
          Seri: parseFloat(series),
          "Sağ Arka Çamurluk": parseFloat(rightRearFender),
          "Sol Arka Çamurluk": parseFloat(leftRearFender),
        },
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  return (
    <div>
      <div className="form">
        <div className="inputs">
          <input
            type="number"
            value={brand}
            onChange={handleChange(setBrand)}
            placeholder="Marka"
          />

          <input
            type="number"
            value={series}
            onChange={handleChange(setSeries)}
            placeholder="Seri"
          />

          <input
            type="number"
            value={model}
            onChange={handleChange(setModel)}
            placeholder="Model"
          />

          <input
            type="number"
            value={transmissionType}
            onChange={handleChange(setTransmissionType)}
            placeholder="Vites Tipi"
          />

          <input
            type="number"
            value={fuelType}
            onChange={handleChange(setFuelType)}
            placeholder="Yakıt Tipi"
          />

          <input
            type="number"
            value={bodyType}
            onChange={handleChange(setBodyType)}
            placeholder="Kasa Tipi"
          />

          <input
            type="number"
            value={color}
            onChange={handleChange(setColor)}
            placeholder="Renk"
          />

          <input
            type="number"
            value={traction}
            onChange={handleChange(setTraction)}
            placeholder="Çekiş Türü"
          />

          <input
            type="number"
            value={paintChange}
            onChange={handleChange(setPaintChange)}
            placeholder="Boya Değişim Miktarı"
          />

          <input
            type="number"
            value={kilometers}
            onChange={handleChange(setKilometers)}
            placeholder="Kilometre Bilgisi"
          />

          <input
            type="number"
            value={year}
            onChange={handleChange(setYear)}
            placeholder="Yıl"
          />

          <input
            type="number"
            value={rearBumper}
            onChange={handleChange(setRearBumper)}
            placeholder="Arka Tampon Durumu"
          />
          <input
            type="number"
            value={rightFrontFender}
            onChange={handleChange(setRightFrontFender)}
            placeholder="Sağ Ön Çamurluk Durumu"
          />
          <input
            type="number"
            value={leftFrontFender}
            onChange={handleChange(setLeftFrontFender)}
            placeholder="Sol Ön Çamurluk Durumu"
          />

          <input
            type="number"
            value={frontBumper}
            onChange={handleChange(setFrontBumper)}
            placeholder="Ön Tampon Durumu"
          />
          <input
            type="number"
            value={rearHood}
            onChange={handleChange(setRearHood)}
            placeholder="Arka Kaput Durumu"
          />
          <input
            type="number"
            value={leftRearDoor}
            onChange={handleChange(setLeftRearDoor)}
            placeholder="Sol Arka Kapı Durumu"
          />
          <input
            type="number"
            value={leftFrontDoor}
            onChange={handleChange(setLeftFrontDoor)}
            placeholder="Sol Ön Kapı Durumu"
          />
          <input
            type="number"
            value={rightFrontDoor}
            onChange={handleChange(setRightFrontDoor)}
            placeholder="Sağ Ön Kapı Durumu"
          />
          <input
            type="number"
            value={rightRearDoor}
            onChange={handleChange(setRightRearDoor)}
            placeholder="Sağ Arka Kapı Durumu"
          />
          <input
            type="number"
            value={rightRearFender}
            onChange={handleChange(setRightRearFender)}
            placeholder="Sağ Arka Çamurluk Durumu"
          />
          <input
            type="number"
            value={leftRearFender}
            onChange={handleChange(setLeftRearFender)}
            placeholder="Sol Arka Çamurluk Durumu"
          />
          <button onClick={makePrediction}>Tahmin Yap</button>

          <div id="main-card">{prediction}</div>
        </div>
      </div>
    </div>
  );
};

export default CarPredictionComponent;