import "./weatherButtons.scss";
import WeatherSelectButton from "../weatherSelectButton/weatherSelectButton";

interface WeatherButtonsProps {
  musicThemes: {
    [theme: string]: {
      id: number;
      name: string;
      backgroundPath: string;
      iconPath: string;
      audioPath: string;
    };
  };
  themeSwitcher: (name: string) => void;
}

function WeatherButtons({
  musicThemes,
  themeSwitcher
}: WeatherButtonsProps): HTMLDivElement {
  const themes = Object.keys(musicThemes);

  const buttonGroupWrapper = document.createElement("div");
  buttonGroupWrapper.classList.add("buttonGroupWrapper");
  themes.forEach((theme) => {
    buttonGroupWrapper.appendChild(
      WeatherSelectButton({
        name: musicThemes[theme].name,
        iconPath: musicThemes[theme].iconPath,
        bgPath: musicThemes[theme].backgroundPath,
        themeSwitcher
      })
    );
  });

  return buttonGroupWrapper;
}

export default WeatherButtons;
