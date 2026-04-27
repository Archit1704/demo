const yearElement = document.querySelector("#year");
const releaseElement = document.querySelector("#release-version");

yearElement.textContent = new Date().getFullYear();

releaseElement.title = `Last checked: ${new Date().toLocaleString()}`;
