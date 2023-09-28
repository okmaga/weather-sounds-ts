import "./app.scss";
import summerBgPath from "../assets/summer-bg.jpg";
import rainBgPath from "../assets/rainy-bg.jpg";
import winterBgPath from "../assets/winter-bg.jpg";
import summerIconPath from "../assets/icons/sun.svg";
import rainIconPath from "../assets/icons/cloud-rain.svg";
import winterIconPath from "../assets/icons/cloud-snow.svg";
import WeatherButtons from "./weatherButtons/weatherButtons";
import Player from "./player/Player";
import summerSoundPath from "../assets/sounds/summer.mp3";
import rainSoundPath from "../assets/sounds/rain.mp3";
import winterSoundPath from "../assets/sounds/winter.mp3";

function App() {
  const musicThemes = {
    summer: {
      id: 1,
      name: "summer",
      backgroundPath: summerBgPath,
      iconPath: summerIconPath,
      audioPath: summerSoundPath
    },
    rain: {
      id: 2,
      name: "rain",
      backgroundPath: rainBgPath,
      iconPath: rainIconPath,
      audioPath: rainSoundPath
    },
    winter: {
      id: 3,
      name: "winter",
      backgroundPath: winterBgPath,
      iconPath: winterIconPath,
      audioPath: winterSoundPath
    }
  };

  const startingTheme = musicThemes.summer;
  const player = new Player(startingTheme);

  function themeSwitcher(theme) {
    if (player.currentTheme.name === theme) {
      if (player.isPlaying) {
        player.pause();
        return;
      }
      player.play();
      return;
    }
    const newTheme = musicThemes[theme];
    player.changeTheme(newTheme);
    appWrapper.style.backgroundImage = `url(${newTheme.backgroundPath})`;
    player.play();
  }

  const appWrapper = document.createElement("div");
  appWrapper.classList.add("app");
  appWrapper.style.backgroundImage = `url(${player.currentTheme.backgroundPath})`;

  const h1 = document.createElement("h1");
  h1.innerText = "Weather Sounds";
  appWrapper.appendChild(h1);
  appWrapper.appendChild(WeatherButtons({ musicThemes, themeSwitcher }));

  appWrapper.appendChild(player.renderPlayer());

  return appWrapper;
}

export default App;
