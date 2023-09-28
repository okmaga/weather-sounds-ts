import "./weatherSelectButton.scss";
import pauseIconePath from "../../assets/icons/pause.svg";

function WeatherSelectButton({ name, iconPath, bgPath, themeSwitcher }) {
  let isPaused = false;

  const buttonWrapper = document.createElement("div");

  const iconImg = new Image();
  iconImg.classList.add("iconImg");
  iconImg.classList.add(`icon-${name}`);

  iconImg.src = iconPath;

  const pauseIcon = new Image();
  pauseIcon.src = pauseIconePath;
  pauseIcon.classList.add("pauseImg");
  pauseIcon.classList.add(`pause-${name}`);
  pauseIcon.style.display = "none";

  buttonWrapper.appendChild(iconImg);
  buttonWrapper.appendChild(pauseIcon);
  buttonWrapper.style.backgroundImage = `url(${bgPath})`;
  buttonWrapper.classList.add("weatherSelectButton");
  buttonWrapper.addEventListener("click", () => {
    const resetIcons = () => {
      Array.from(document.querySelectorAll(".iconImg")).forEach(
        (themeIcon) => (themeIcon.style.display = "block")
      );
      Array.from(document.querySelectorAll(".pauseImg")).forEach(
        (themeIcon) => (themeIcon.style.display = "none")
      );
    };

    if (isPaused) {
      resetIcons();
      pauseIcon.style.display = "block";
      iconImg.style.display = "none";
    } else {
      resetIcons();
      pauseIcon.style.display = "none";
      iconImg.style.display = "block";
    }
    themeSwitcher(name);
    isPaused = !isPaused;
  });
  return buttonWrapper;
}

export default WeatherSelectButton;
