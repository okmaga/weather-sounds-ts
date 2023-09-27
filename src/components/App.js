import "./app.scss";
import summerBgPath from "../assets/summer-bg.jpg";
import rainBgPath from "../assets/rainy-bg.jpg";
import winterBgPath from "../assets/winter-bg.jpg";
import WeatherButtons from "./weatherButtons/weatherButtons";

function App() {
  const musicThemes = {
    summer: { id: 1, name: "summer", backgroundPath: summerBgPath },
    rain: { id: 2, name: "rain", backgroundPath: rainBgPath },
    winter: { id: 3, name: "winter", backgroundPath: winterBgPath }
  };

  const startingTheme = "summer";

  const player = {
    isPlaying: false,
    currentTheme: musicThemes[startingTheme]
  };

  function themeSwitcher(theme) {
    if (player.currentTheme.name === theme && player.isPlaying) {
      player.isPlaying = false;
      return;
    }
    player.currentTheme = musicThemes[theme];
    player.isPlaying = true;
    appWrapper.style.backgroundImage = `url(${player.currentTheme.backgroundPath})`;
  }

  const appWrapper = document.createElement("div");
  appWrapper.classList.add("app");
  appWrapper.style.backgroundImage = `url(${player.currentTheme.backgroundPath})`;

  const h1 = document.createElement("h1");
  h1.innerText = "Weather Sounds";
  appWrapper.appendChild(h1);
  appWrapper.appendChild(WeatherButtons({ musicThemes, themeSwitcher }));

  return appWrapper;
}

export default App;
