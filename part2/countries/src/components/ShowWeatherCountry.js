

export const ShowWeatherCountry = ({ weather }) => {

  const { current, location } = weather;

  return (
    <>
      <h3>Weather in { location.name }</h3>
      <p><strong>temperature:</strong> { current.temperature } Celcius</p>
      <img src={current.weather_icons[0]} height="70"alt="icon del clima actual"/>
      <p><strong>wind:</strong> { current.wind_speed } mph direction { current.wind_dir }</p>

    </>
  )
}
