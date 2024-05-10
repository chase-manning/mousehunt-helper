const INTERVAL = 100;
const BACKGROUND = "https://i.imgur.com/4INJWKY.jpeg";

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

let checkElementInterval = setInterval(async () => {
  // Getting elements
  const pageFrame = document.getElementsByClassName("pageFrameView");
  if (!pageFrame) return;
  const pageSidebar = document.getElementsByClassName("pageSidebarView");
  if (!pageSidebar) return;
  const columns = document.getElementsByClassName("pageFrameView-column");
  if (!columns) return;
  const campPageBanner = document.getElementsByClassName("campPage-banner");
  if (!campPageBanner) return;
  const footer = document.getElementsByClassName("pageFrameView-footer");
  if (!footer) return;
  const header1 = document.getElementsByClassName(
    "mousehuntHeaderView-gameBanner"
  );
  if (!header1) return;
  const header2 = document.getElementsByClassName(
    "mousehuntHeaderView-newsTicker"
  );
  if (!header2) return;
  const easterEvent = document.getElementsByClassName("QuestSpringHuntCampHUD");
  if (!easterEvent) return;
  const background = document.getElementsByClassName("PageCamp");
  if (!background) return;
  const oldBackground = document.getElementById("mousehuntContainer");
  if (!oldBackground) return;
  const oldBackground2 = document.getElementsByClassName(
    "pageFrameView-contentContainer"
  );
  if (!oldBackground2) return;
  const oldBackground3 = document.getElementsByClassName(
    "pageFrameView-content"
  );
  if (!oldBackground3) return;

  // We've got everything we need
  clearInterval(checkElementInterval);

  // Setting interveral for regular triggers
  setInterval(() => {
    // Remove the banner
    if (campPageBanner.length > 0) {
      campPageBanner[0].parentElement.removeChild(campPageBanner[0]);
    }

    // Remove the easter event
    if (easterEvent.length > 0) {
      easterEvent[0].parentElement.removeChild(easterEvent[0]);
    }

    // Full screen the travel
    const travel = document.getElementsByClassName("travelPage-mapContainer");
    if (travel && travel.length > 0) {
      travel[1].style.position = "fixed";
      travel[1].style.top = "0";
      travel[1].style.left = "0";
      travel[1].style.width = "100dvw";
      travel[1].style.height = "100dvh";
    }

    // Make sound for horn
    hornAlert();
  }, INTERVAL * 10);

  // Hiding the sidebar and background
  pageFrame[0].style.gridTemplateColumns = "1fr";
  pageFrame[0].style.width = "760px";
  pageFrame[0].style.margin = "auto";
  pageSidebar[0].parentElement.removeChild(pageSidebar[0]);
  for (let i = columns.length - 1; i >= 0; i--) {
    columns[i].parentElement.removeChild(columns[i]);
  }

  // Remove the footer
  footer[0].parentElement.removeChild(footer[0]);

  // Remove the header
  header1[0].parentElement.removeChild(header1[0]);
  header2[0].parentElement.removeChild(header2[0]);

  // Changing background
  background[0].style.backgroundColor = "#604530";
  background[0].style.backgroundImage = `url(${BACKGROUND})`;
  background[0].style.backgroundSize = "cover";
  oldBackground.style.background = "none";
  oldBackground2[0].style.background = "none";
  oldBackground3[0].style.background = "none";
}, INTERVAL);
