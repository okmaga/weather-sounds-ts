import "./app.scss";

import WeatherButtons from "./weatherButtons/weatherButtons";
function App() {
  const appWrapper = document.createElement("div");
  appWrapper.classList.add("app");

  const h1 = document.createElement("h1");
  h1.innerText = "Weather Sounds";
  appWrapper.appendChild(h1);
  appWrapper.appendChild(WeatherButtons());

  return appWrapper;
}

export default App;
