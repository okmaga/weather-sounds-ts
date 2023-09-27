import "./weatherSelectButton.scss";

function WeatherSelectButton({ name, iconPath, bgPath, themeSwitcher }) {
  const buttonWrapper = document.createElement("div");
  const iconImg = new Image();
  iconImg.classList.add("iconImg");
  iconImg.src = iconPath;
  buttonWrapper.appendChild(iconImg);
  buttonWrapper.style.backgroundImage = `url(${bgPath})`;
  buttonWrapper.classList.add("weatherSelectButton");
  buttonWrapper.addEventListener("click", () => {
    themeSwitcher(name);
  });
  return buttonWrapper;
}

export default WeatherSelectButton;
