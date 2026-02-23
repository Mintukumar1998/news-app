import React, { useState } from "react";
import News from "./components/News";
import CustomNovbar from "./components/Novbar";
import "./App.css";
import Footer from "./components/footer";

function App() {
  // lift country/category state so navbar and news component share it
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");

  return (
    <div className="App">
      
      {/* navigation bar shown on index page */}
      <CustomNovbar setCountry={setCountry} setCategory={setCategory} />
            
      {/* <header className="App-header">
        <h1>News App</h1>
      </header> */}
      {/* pass values down to News for fetching headlines */}
      <News country={country} category={category} />
      <Footer />
    </div>
  );
}
export default App;   