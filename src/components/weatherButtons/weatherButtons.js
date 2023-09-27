import "./weatherButtons.scss";
import WeatherSelectButton from "../weatherSelectButton/WeatherSelectButton";

function WeatherButtons({ musicThemes, themeSwitcher }) {
  const themes = Object.keys(musicThemes);

  const buttonGroupWrapper = document.createElement("div");
  buttonGroupWrapper.classList.add("buttonGroupWrapper");
  themes.forEach((theme) => {
    buttonGroupWrapper.appendChild(
      WeatherSelectButton({
        name: musicThemes[theme].name,
        themeSwitcher
      })
    );
  });

  return buttonGroupWrapper;
}

export default WeatherButtons;
