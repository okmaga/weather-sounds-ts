import "./weatherSelectButton.scss";

function WeatherSelectButton({ name, themeSwitcher }) {
  const buttonWrapper = document.createElement("div");
  buttonWrapper.innerText = name;
  buttonWrapper.classList.add("weatherSelectButton");
  buttonWrapper.addEventListener("click", () => {
    themeSwitcher(name);
  });
  return buttonWrapper;
}

export default WeatherSelectButton;
