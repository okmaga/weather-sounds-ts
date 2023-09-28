import "./player.scss";

class Player {
  constructor(theme) {
    this.audio = new Audio(theme.audioPath);
    this.isPlaying = false;
    this.isPaused = false;
    this.currentTheme = theme;
    this.audio.volume = 0.2;
  }

  play() {
    this.isPlaying = true;
    this.isPaused = false;
    this.audio.loop = true;
    this.audio.play();
  }

  pause() {
    this.isPlaying = false;
    this.isPaused = true;
    this.audio.pause();
  }

  changeTheme(theme) {
    this.currentTheme = theme;
    this.audio.src = theme.audioPath;
    this.audio.play();
  }

  renderPlayer() {
    const playerWrapper = document.createElement("div");
    playerWrapper.classList.add("audioControlsWrapper");
    const volumeControl = document.createElement("input");
    volumeControl.defaultValue = this.audio.volume * 100;
    volumeControl.type = "range";
    volumeControl.classList.add("volumeSlider");
    volumeControl.addEventListener("input", (e, player) => {
      this.audio.volume = e.currentTarget.value / 100;
    });
    playerWrapper.appendChild(volumeControl);
    return playerWrapper;
  }
}

export default Player;
