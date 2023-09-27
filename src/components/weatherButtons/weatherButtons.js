import "./weatherButtons.scss";
import WeatherSelectButton from "../weatherSelectButton/WeatherSelectButton";

function WeatherButtons() {
  const buttons = [
    { id: 1, name: "summer" },
    { id: 2, name: "rain" },
    { id: 3, name: "winter" }
  ];
  const buttonGroupWrapper = document.createElement("div");
  buttonGroupWrapper.classList.add("buttonGroupWrapper");
  buttons.forEach((button) => {
    buttonGroupWrapper.appendChild(WeatherSelectButton({ name: button.name }));
  });

  return buttonGroupWrapper;
}

export default WeatherButtons;
