import "./weatherSelectButton.scss";

function WeatherSelectButton({ name }) {
  const buttonWrapper = document.createElement("div");
  buttonWrapper.innerText = name;
  buttonWrapper.classList.add("weatherSelectButton");
  return buttonWrapper;
}

export default WeatherSelectButton;
