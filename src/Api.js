import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'


function App() {
  const [weatherData, setWeatherData] = useState()
  const baseUrl = 'https://reqres.in/api/users';

  useEffect(()=>{
    axios.get(baseUrl)
    .then((response)=>{
      setWeatherData(response.data)
    })
  }, [])

  if(!weatherData){
    return;
  }
  // const dataCamp = Data.map((data)=>{
  //   return(
  //     <Card 
  //     key={data.key}
  //     title={data.title}
  //     />
  //   )
  // })
  return (
    // <div>
    //   <h1>Mapping</h1>
    //   {dataCamp}
    // </div>
    <div>
      <h1>Weather app is Ready With Honoforics</h1>
      <p>{weatherData.data[1].first_name}</p>
    </div>
  );
}

export default App;
