import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from "./City";

function App() {
  const key = "c89535caea7b462fffb59098f4a0e9b7";
  const [search, setSearch] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get
          (`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <h1>HAVA DURUMU</h1>
      <div className="mb-3 pt-20 ">
        <input id='inputID'
          onChange={(e) => setSearch(e.target.value)}
           type="text"  placeholder="Şehir Giriniz" className="px-10 py-8 placeholder-slate-300 text-slate-600
            relative rounded text-sm text-center border-4 shadow outline-none focus:outline-none focus:ring" />
         <City city={city} />
      </div>
    </div>
  );
}

export default App;
