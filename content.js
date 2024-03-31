const INTERVAL = 100;

let checkElementInterval = setInterval(async () => {
  // Getting elements
  const pageFrame = document.getElementsByClassName("pageFrameView");
  if (!pageFrame) return;
  const pageSidebar = document.getElementsByClassName("pageSidebarView");
  if (!pageSidebar) return;
  const columns = document.getElementsByClassName("pageFrameView-column");
  if (!columns) return;

  // We've got everything we need
  clearInterval(checkElementInterval);

  // Hiding the sidebar and background
  pageFrame[0].style.gridTemplateColumns = "1fr";
  pageFrame[0].style.width = "760px";
  pageFrame[0].style.margin = "auto";
  pageSidebar[0].parentElement.removeChild(pageSidebar[0]);
  for (let i = columns.length - 1; i >= 0; i--) {
    columns[i].parentElement.removeChild(columns[i]);
  }
}, INTERVAL);
