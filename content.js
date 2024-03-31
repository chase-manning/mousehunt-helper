const INTERVAL = 100;

const hornAlert = () => {
  const horn = getElementsByClassName("horn");
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

  // We've got everything we need
  clearInterval(checkElementInterval);

  // Setting interveral for regular triggers
  setInterval(() => {
    // Remove the banner
    campPageBanner[0].parentElement.removeChild(campPageBanner[0]);
  }, INTERVAL);

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
}, INTERVAL);
