import "./player.scss";

interface theme {
  id: number;
  name: string;
  backgroundPath: string;
  iconPath: string;
  audioPath: string;
}

class Player {
  audio: HTMLAudioElement;
  isPlaying: boolean;
  isPaused: boolean;
  currentTheme: theme;

  constructor(theme: theme) {
    this.audio = new Audio(theme.audioPath);
    this.isPlaying = false;
    this.isPaused = false;
    this.currentTheme = theme;
    this.audio.volume = 0.2;
  }

  play(): void {
    this.isPlaying = true;
    this.isPaused = false;
    this.audio.loop = true;
    this.audio.play();
  }

  pause(): void {
    this.isPlaying = false;
    this.isPaused = true;
    this.audio.pause();
  }

  changeTheme(theme: theme): void {
    this.currentTheme = theme;
    this.audio.src = theme.audioPath;
    this.audio.play();
  }

  renderPlayer(): HTMLDivElement {
    const playerWrapper = document.createElement("div");
    playerWrapper.classList.add("audioControlsWrapper");
    const volumeControl = document.createElement("input");
    volumeControl.defaultValue = (this.audio.volume * 100).toString();
    volumeControl.type = "range";
    volumeControl.classList.add("volumeSlider");
    volumeControl.addEventListener("input", (e: Event) => {
      if (e.currentTarget instanceof HTMLInputElement) {
        this.audio.volume = +e.currentTarget.value / 100;
      }
    });
    playerWrapper.appendChild(volumeControl);
    return playerWrapper;
  }
}

export default Player;
