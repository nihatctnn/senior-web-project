import React, { useState } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch';

function App() {
    const [formData, setFormData] = useState({
        year: '',
        model: '',
        renk: '',
        boyadeğisen: '',
        cekis: '',
        arkatampon: '',
        sagoncamurluk: '',
        soloncamurluk: '',
        kilometre: '',
        marka: '',
        yakittipi: '',
        vitestipi: '',
        kasatipi: '',
        ontampon: '',
        arkakaput: '',
        solarkakapi: '',
        solonkapi: '',
        sagonkapi: '',
        sagarkakapi: '',
        seri: '',
        sagarkacamurluk: '',
        solarakacamurluk: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://carapi.bftsoft.uk/', {
                method: 'POST', // POST metodu kullanılacak
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    api_key: '11111111111',
                    data: {
                        Yıl: parseInt(formData.year), // Seçilen yılı integer'a dönüştür
                        Model: parseInt(formData.model), // Seçilen modeli integer'a dönüştür
                        Renk: formData.renk,
                        "Boya-değişen": parseFloat(formData.boyadeğisen),
                        "Çekiş": parseFloat(formData.cekis),
                        "Arka Tampon": parseFloat(formData.arkatampon),
                        "Sağ Ön Çamurluk": parseFloat(formData.sagoncamurluk),
                        "Sol Ön Çamurluk": parseFloat(formData.soloncamurluk),
                        "Kilometre": parseInt(formData.kilometre),
                        "Marka": parseInt(formData.marka),
                        "Yakıt Tipi": parseFloat(formData.yakittipi),
                        "Vites Tipi": parseFloat(formData.vitestipi),
                        "Kasa Tipi": parseFloat(formData.kasatipi),
                        "Ön Tampon": parseFloat(formData.ontampon),
                        "Arka Kaput": parseFloat(formData.arkakaput),
                        "Sol Arka Kapı": parseFloat(formData.solarkakapi),
                        "Sol Ön Kapı": parseFloat(formData.solonkapi),
                        "Sağ Ön Kapı": parseFloat(formData.sagonkapi),
                        "Sağ Arka Kapı": parseFloat(formData.sagarkakapi),
                        "Seri": parseFloat(formData.seri),
                        "Sağ Arka Çamurluk": parseFloat(formData.sagarkacamurluk),
                        "Sol Arka Çamurluk": parseFloat(formData.solarakacamurluk)
                    }
                })
            });
            const data = await response.json();
            console.log(data); // Gelen veriyi konsola yazdırma veya işlem yapma
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    Yıl:
                    <select name="year" value={formData.year} onChange={handleChange}>
                        {/* Year options */}
                    </select>
                </label>
                <br />
                <label>
                    Model:
                    <select name="model" value={formData.model} onChange={handleChange}>
                        {/* Model options */}
                    </select>
                </label>
                <br />
                <label>
                    Renk:
                    <select name="renk" value={formData.renk} onChange={handleChange}>
                        {/* Renk options */}
                    </select>
                </label>
                <br />
                <label>
                    Boya Değişen:
                    <select name="boyadeğisen" value={formData.boyadeğisen} onChange={handleChange}>
                        {/* Boya Değişen options */}
                    </select>
                </label>
                <br />
                <label>
                    Çekiş:
                    <select name="cekis" value={formData.cekis} onChange={handleChange}>
                        {/* Çekiş options */}
                    </select>
                </label>
                <br />
                <label>
                    Arka Tampon:
                    <select name="arkatampon" value={formData.arkatampon} onChange={handleChange}>
                        {/* Arka Tampon options */}
                    </select>
                </label>
                <br />
                <label>
                    Sağ Ön Çamurluk:
                    <select name="sagoncamurluk" value={formData.sagoncamurluk} onChange={handleChange}>
                        {/* Sağ Ön Çamurluk options */}
                    </select>
                </label>
                <br />
                <label>
                    Sol Ön Çamurluk:
                    <select name="soloncamurluk" value={formData.soloncamurluk} onChange={handleChange}>
                        {/* Sol Ön Çamurluk options */}
                    </select>
                </label>
                <br />
                <label>
                    Kilometre:
                    <select name="kilometre" value={formData.kilometre} onChange={handleChange}>
                        {/* Kilometre options */}
                    </select>
                </label>
                <br />
                <label>
                    Marka:
                    <select name="marka" value={formData.marka} onChange={handleChange}>
                        {/* Marka options */}
                    </select>
                </label>
                <br />
                <label>
                    Yakıt Tipi:
                    <select name="yakittipi" value={formData.yakittipi} onChange={handleChange}>
                        {/* Yakıt Tipi options */}
                    </select>
                </label>
                <br />
                <label>
                    Vites Tipi:
                    <select name="vitestipi" value={formData.vitestipi} onChange={handleChange}>
                        {/* Vites Tipi options */}
                    </select>
                </label>
                <br />
                <label>
                    Kasa Tipi:
                    <select name="kasatipi" value={formData.kasatipi} onChange={handleChange}>
                        {/* Kasa Tipi options */}
                    </select>
                </label>
                <br />
                <label>
                    Ön Tampon:
                    <select name="ontampon" value={formData.ontampon} onChange={handleChange}>
                        {/* Ön Tampon options */}
                    </select>
                </label>
                <br />
                <label>
                    Arka Kaput:
                    <select name="arkakaput" value={formData.arkakaput} onChange={handleChange}>
                        {/* Arka Kaput options */}
                    </select>
                </label>
                <br />
                <label>
                    Sol Arka Kapı:
                    <select name="solarkakapi" value={formData.solarkakapi} onChange={handleChange}>
                        {/* Sol Arka Kapı options */}
                    </select>
                </label>
                <br />
                <label>
                    Sol Ön Kapı:
                    <select name="solonkapi" value={formData.solonkapi} onChange={handleChange}>
                        {/* Sol Ön Kapı options */}
                    </select>
                </label>
                <br />
                <label>
                    Sağ Ön Kapı:
                    <select name="sagonkapi" value={formData.sagonkapi} onChange={handleChange}>
                        {/* Sağ Ön Kapı options */}
                    </select>
                </label>
                <br />
                <label>
                    Sağ Arka Kapı:
                    <select name="sagarkakapi" value={formData.sagarkakapi} onChange={handleChange}>
                        {/* Sağ Arka Kapı options */}
                    </select>
                </label>
                <br />
                <label>
                    Seri:
                    <select name="seri" value={formData.seri} onChange={handleChange}>
                        {/* Seri options */}
                    </select>
                </label>
                <br />
                <label>
                    Sağ Arka Çamurluk:
                    <select name="sagarkacamurluk" value={formData.sagarkacamurluk} onChange={handleChange}>
                        {/* Sağ Arka Çamurluk options */}
                    </select>
                </label>
                <br />
                <label>
                    Sol Arka Çamurluk:
                    <select name="solarakacamurluk" value={formData.solarakacamurluk} onChange={handleChange}>
                        {/* Sol Arka Çamurluk options */}
                    </select>
                </label>
                <br />
                <button type="submit">Gönder</button>
            </form>
        </div>
    );
}

export default App;
