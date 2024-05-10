const INTERVAL = 1000;

const hornReady = () => {
  const class_ = "huntersHornView__timerState--type-ready";
  const horn = document.getElementsByClassName(class_);
  if (!horn) return false;
  if (horn.length === 0) return false;
  const styles = window.getComputedStyle(horn[0]);
  return styles.display !== "none";
};

const hornAlert = () => {
  if (!hornReady()) return;
  const alert = "https://www.soundjay.com/buttons/sounds/button-1.mp3";
  const audio = new Audio(alert);
  audio.volume = 0.1;
  audio.play();
};

setInterval(() => {
  hornAlert();
}, INTERVAL);
