import React, { useEffect, useState } from 'react';

const DisplayCities = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("london");


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bf99bc2cdae6aa5fdcd2cbd03ee8bcc1`;

            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    const getCity = (event) => {
        setSearch(event.target.value)

    }

    
    return (
      <>
        <div className="main">
          <div className="input-field">
            <input type="search" onChange={getCity} />
          </div>

          {!city ? (
            <p className="error-msg">Insert Valid City Name</p>
          ) : (
            <div>
              <div className="cities">
                <i className="fas fa-street-view">{search}</i>
              </div>
              <div className="display-temp">{city.temp}℃</div>
              <div className="temp">
                <div className="temp max">Max : {city.temp_max}℃</div>
                <div className="temp min">Min : {city.temp_min}℃</div>
              </div>
            </div>
          )}
        </div>
      </>
    );
}
// api.openweathermap.org/data/2.5/weather?q={city name}&appid=5ed123e09c25960e9506f3745fcb9976

export default DisplayCities;




