import React, { useState, useEffect } from "react";
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

  const [transmissionOptions, setTransmissionOptions] = useState([]);
  const [fuelTypeOptions, setFuelTypeOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [seriesOptions, setSeriesOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [bodyTypeOptions, setBodyTypeOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [tractionOptions, setTractionOptions] = useState([]);
  const [paintChangeOptions, setPaintChangeOptions] = useState([]);

  useEffect(() => {
    axios
      .get(config.label_mapping_url)
      .then((response) => {
        if (response.data && response.data["Marka"]) {
          const brandOptions = Object.entries(response.data["Marka"]).map(
            ([label, value]) => ({ label, value })
          );
          setBrandOptions(brandOptions);
        }

        if (response.data && response.data["Seri"]) {
          const seriesOptions = Object.entries(response.data["Seri"]).map(
            ([label, value]) => ({ label, value })
          );
          setSeriesOptions(seriesOptions);
        }

        if (response.data && response.data["Model"]) {
          const modelOptions = Object.entries(response.data["Model"]).map(
            ([label, value]) => ({ label, value })
          );
          setModelOptions(modelOptions);
        }

        if (response.data && response.data["Vites Tipi"]) {
          const transmissionOptions = Object.entries(
            response.data["Vites Tipi"]
          ).map(([label, value]) => ({ label, value }));
          setTransmissionOptions(transmissionOptions);
        }

        if (response.data && response.data["Yakıt Tipi"]) {
          const fuelTypeOptions = Object.entries(
            response.data["Yakıt Tipi"]
          ).map(([label, value]) => ({ label, value }));
          setFuelTypeOptions(fuelTypeOptions);
        }

        if (response.data && response.data["Kasa Tipi"]) {
          const bodyTypeOptions = Object.entries(
            response.data["Kasa Tipi"]
          ).map(([label, value]) => ({ label, value }));
          setBodyTypeOptions(bodyTypeOptions);
        }

        if (response.data && response.data["Renk"]) {
          const colorOptions = Object.entries(response.data["Renk"]).map(
            ([label, value]) => ({ label, value })
          );
          setColorOptions(colorOptions);
        }

        if (response.data && response.data["Çekiş"]) {
          const tractionOptions = Object.entries(response.data["Çekiş"]).map(
            ([label, value]) => ({ label, value })
          );
          setTractionOptions(tractionOptions);
        }

        if (response.data && response.data["Boya-değişen"]) {
          const paintChangeOptions = Object.entries(
            response.data["Boya-değişen"]
          ).map(([label, value]) => ({ label, value }));
          setPaintChangeOptions(paintChangeOptions);
        }
      })
      .catch((error) => {
        console.error("Error fetching transmission options:", error);
      });
  }, []);
  

  const handleChange = (setStateFunc) => (e) => {
    setStateFunc(e.target.value);
  };

  const getPartColor = (part, color) => {
    switch (color) {
      case "0":
        return "rgba(0, 128, 0, 0.3)"; // green
      case "1":
        return "rgba(255, 255, 224, 0.9)"; // lightyellow
      case "2":
        return "rgba(255, 140, 0, 0.3)"; // darkorange
      case "3":
        return "rgba(255, 0, 0, 0.5)"; // red
      case "4":
        return "rgba(128, 128, 128, 0.7)"; // gray
      default:
        return "rgba(0, 0, 0, 0)"; // Default transparent color
    }
  };

  
  const kmOptions = [];
  for (let i = 0; i <= 1000000; i += 1000) {
    kmOptions.push(
      <option key={i} value={i}>
        {i} km
      </option>
    );
  }

  const yearOptions = [];
  for (let i = 2024; i >= 1940; i -= 1) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const makePrediction = async () => {
    try {
      const response = await axios.post(config.carApiUrl, {
        api_key: config.api_key,
        data: {
          "Yıl": parseInt(year),
          "Model": parseInt(model),
          "Renk": parseInt(color),
          "Boya-değişen": parseFloat(paintChange),
          "Çekiş": parseFloat(traction),
          "Arka Tampon": parseFloat(rearBumper),
          "Sağ Ön Çamurluk": parseFloat(rightFrontFender),
          "Sol Ön Çamurluk": parseFloat(leftFrontFender),
          "Kilometre": parseInt(kilometers),
          "Marka": parseInt(brand),
          "Yakıt Tipi": parseFloat(fuelType),
          "Vites Tipi": parseFloat(transmissionType),
          "Kasa Tipi": parseFloat(bodyType),
          "Ön Tampon": parseFloat(frontBumper),
          "Arka Kaput": parseFloat(rearHood),
          "Sol Arka Kapı": parseFloat(leftRearDoor),
          "Sol Ön Kapı": parseFloat(leftFrontDoor),
          "Sağ Ön Kapı": parseFloat(rightFrontDoor),
          "Sağ Arka Kapı": parseFloat(rightRearDoor),
          "Seri": parseFloat(series),
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
    <div className="form-container">
      <div className="form">
        <div className="inputs">
          <select value={brand} onChange={handleChange(setBrand)}>
            <option value="">Marka</option>
            {brandOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select value={series} onChange={handleChange(setSeries)}>
            <option value="">Seri</option>
            {seriesOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select value={model} onChange={handleChange(setModel)}>
            <option value="">Model</option>
            {modelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            value={transmissionType}
            onChange={handleChange(setTransmissionType)}
          >
            <option value="">Vites Tipi</option>
            {transmissionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select value={fuelType} onChange={handleChange(setFuelType)}>
            <option value="">Yakıt Tipi</option>
            {fuelTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select value={bodyType} onChange={handleChange(setBodyType)}>
            <option value="">Kasa Tipi</option>
            {bodyTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select value={color} onChange={handleChange(setColor)}>
            <option value="">Renk</option>
            {colorOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select value={traction} onChange={handleChange(setTraction)}>
            <option value="">Çekiş Türü</option>
            {tractionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select value={kilometers} onChange={handleChange(setKilometers)}>
            <option value="">Kilometre(km)</option>
            {kmOptions}
          </select>
          <select value={year} onChange={handleChange(setYear)}>
            <option value="">Yıl</option>
            {yearOptions}
          </select>

          <select value={rearBumper} onChange={handleChange(setRearBumper)}>
            <option value="">Arka Tampon Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select
            value={rightFrontFender}
            onChange={handleChange(setRightFrontFender)}
          >
            <option value="">Sağ Ön Çamurluk Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select
            value={leftFrontFender}
            onChange={handleChange(setLeftFrontFender)}
          >
            <option value="">Sol Ön Çamurluk Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select value={frontBumper} onChange={handleChange(setFrontBumper)}>
            <option value="">Ön Tampon Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select value={rearHood} onChange={handleChange(setRearHood)}>
            <option value="">Arka Kaput Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select value={leftRearDoor} onChange={handleChange(setLeftRearDoor)}>
            <option value="">Sol Arka Kapı Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select
            value={leftFrontDoor}
            onChange={handleChange(setLeftFrontDoor)}
          >
            <option value="">Sol Ön Kapı Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select
            value={rightFrontDoor}
            onChange={handleChange(setRightFrontDoor)}
          >
            <option value="">Sağ Ön Kapı Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select
            value={rightRearDoor}
            onChange={handleChange(setRightRearDoor)}
          >
            <option value="">Sağ Arka Kapı Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select
            value={rightRearFender}
            onChange={handleChange(setRightRearFender)}
          >
            <option value="">Sağ Arka Çamurluk Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select
            value={leftRearFender}
            onChange={handleChange(setLeftRearFender)}
          >
            <option value="">Sol Arka Çamurluk Durumu Seçiniz</option>
            <option value="0">Orjinal</option>
            <option value="1">Local Boyalı</option>
            <option value="2">Boyalı</option>
            <option value="3">Değişmiş</option>
            <option value="4">Belirtilmemiş</option>
          </select>

          <select value={paintChange} onChange={handleChange(setPaintChange)}>
            <option value="">Boya Değişim Miktarı</option>
            {paintChangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <button onClick={makePrediction}>Hesapla</button>

          <div className="result">
            <div id="main-card">
              <b>{prediction}</b>
            </div>
          </div>
        </div>
      </div>

      <div className="car-architecture-container">
        <img
          src="./images/car-arch.jpg"
          alt="car-architecture"
          className="car-architecture"
        />

        <div
          className="parca arka-tampon"
          style={{ backgroundColor: getPartColor("rearBumper", rearBumper) }}
        ></div>

        <div
          className="parca sag-on-camurluk"
          style={{
            backgroundColor: getPartColor("rightFrontFender", rightFrontFender),
          }}
        ></div>

        <div
          className="parca sol-on-camurluk"
          style={{
            backgroundColor: getPartColor("leftFrontFender", leftFrontFender),
          }}
        ></div>

        <div
          className="parca on-tampon"
          style={{ backgroundColor: getPartColor("frontBumper", frontBumper) }}
        ></div>

        <div
          className="parca arka-kaput" 
          style={{ backgroundColor: getPartColor("rearHood", rearHood) }}>
        </div>
        
        <div
          className="parca sol-arka-kapi"
          style={{ backgroundColor: getPartColor("leftRearDoor", leftRearDoor) }}
        ></div>

        <div
          className="parca sol-on-kapi"
          style={{ backgroundColor: getPartColor("leftFrontDoor", leftFrontDoor) }}
        ></div>

        <div
          className="parca sag-on-kapi"
          style={{
            backgroundColor: getPartColor("rightFrontDoor", rightFrontDoor),
          }}
        ></div>

        <div
          className="parca sag-arka-kapi"
          style={{
            backgroundColor: getPartColor("rightRearDoor", rightRearDoor),
          }}
        ></div>

        <div
          className="parca sag-arka-camurluk"
          style={{
            backgroundColor: getPartColor("rightRearFender", rightRearFender),
          }}
        ></div>

        <div
          className="parca sol-arka-camurluk"
          style={{
            backgroundColor: getPartColor("leftRearFender", leftRearFender),
          }}
        ></div>

        <div className="definition">
          <ul>
            <li id="original"><b>Orjinal</b></li>
            <li id="local"><b>Local Boyalı</b></li>
            <li id="painted"><b>Boyalı</b></li>
            <li id="changed"><b>Değişmiş</b></li>
            <li id="undefined"><b>Belirtilmemiş</b></li>
          </ul>
        </div>

        <div className="definition">
                  <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>

    </div>
  );
};

export default CarPredictionComponent;