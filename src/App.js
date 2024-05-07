import React, { useState } from "react";
import "./App.css";
import config from "./config.json";

function App() {
  const [formData, setFormData] = useState({
    year: "",
    model: "",
    renk: "",
    boyadegisen: "",
    cekis: "",
    arkatampon: "",
    sagoncamurluk: "",
    soloncamurluk: "",
    kilometre: "",
    marka: "",
    yakittipi: "",
    vitestipi: "",
    kasatipi: "",
    ontampon: "",
    arkakaput: "",
    solarkakapi: "",
    solonkapi: "",
    sagonkapi: "",
    sagarkakapi: "",
    seri: "",
    sagarkacamurluk: "",
    solarakacamurluk: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        "Yıl": parseInt(formData.year),
        "Model": parseInt(formData.model),
        "Renk": parseInt(formData.renk),
        "Boya-değişen": parseInt(formData.boyadegisen),
        "Çekiş": parseInt(formData.cekis),
        "Arka Tampon": parseInt(formData.arkatampon),
        "Sağ Ön Çamurluk": parseInt(formData.sagoncamurluk),
        "Sol Ön Çamurluk": parseInt(formData.soloncamurluk),
        "Kilometre": parseInt(formData.kilometre),
        "Marka": parseInt(formData.marka),
        "Yakıt Tipi": parseInt(formData.yakittipi),
        "Vites Tipi": parseInt(formData.vitestipi),
        "Kasa Tipi": parseInt(formData.kasatipi),
        "Ön Tampon": parseInt(formData.ontampon),
        "Arka Kaput": parseInt(formData.arkakaput),
        "Sol Arka Kapı": parseInt(formData.solarkakapi),
        "Sol Ön Kapı": parseInt(formData.solonkapi),
        "Sağ Ön Kapı": parseInt(formData.sagonkapi),
        "Sağ Arka Kapı": parseInt(formData.sagarkakapi),
        "Seri": parseInt(formData.seri),
        "Sağ Arka Çamurluk": parseInt(formData.sagarkacamurluk),
        "Sol Arka Çamurluk": parseInt(formData.solarakacamurluk)
      };

      const response = await fetch(config.carApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: "11111111111",
          data: dataToSend,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Server error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const yearOptions = [];
  for (let i = 1950; i <= 2024; i += 1) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Marka:
          <input
            type="text"
            name="marka"
            value={formData.marka}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Seri:
          <input
            type="text"
            name="seri"
            value={formData.seri}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Yil:
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Yakit Tipi:
          <input
            type="text"
            name="yakittipi"
            value={formData.yakittipi}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Vites Tipi:
          <input
            type="text"
            name="vitestipi"
            value={formData.vitestipi}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Kasa Tipi:
          <input
            type="text"
            name="kasatipi"
            value={formData.kasatipi}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Renk:
          <input
            type="text"
            name="renk"
            value={formData.renk}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Cekis:
          <input
            type="text"
            name="cekis"
            value={formData.cekis}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Boya Degisen:
          <input
            type="text"
            name="boyadegisen"
            value={formData.boyadegisen}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        {/* burdan sonrası mapden çekilmeyecek*/}

        <label>
          Kilometre:
          <input
            type="text"
            name="kilometre"
            value={formData.kilometre}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          On Tampon:
          <input
            type="text"
            name="ontampon"
            value={formData.ontampon}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Arka Kaput:
          <input
            type="text"
            name="arkakaput"
            value={formData.arkakaput}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sol Arka Kapi:
          <input
            type="text"
            name="solarkakapi"
            value={formData.solarkakapi}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sol On Kapi:
          <input
            type="text"
            name="solonkapi"
            value={formData.solonkapi}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sag On Kapi:
          <input
            type="text"
            name="sagonkapi"
            value={formData.sagonkapi}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sag Arka Kapi:
          <input
            type="text"
            name="sagarkakapi"
            value={formData.sagarkakapi}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sag Arka Camurluk:
          <input
            type="text"
            name="sagarkacamurluk"
            value={formData.sagarkacamurluk}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sol Arka Camurluk:
          <input
            type="text"
            name="solarakacamurluk"
            value={formData.solarakacamurluk}
            onChange={handleChange}
          />
        </label>

        <br />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default App;