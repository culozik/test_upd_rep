// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { ipcRenderer } = require("electron");

document.getElementById("update-btn").addEventListener("click", () => {
	ipcRenderer.send("update-app");
});

document.getElementById("later-btn").addEventListener("click", () => {
	ipcRenderer.send("postpone-update");
});
