/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
    
console.log("renderer.js loaded.");
import "./index.css";
let startTime;
function startTimer() {
  startTime = Date.now();
  console.log("Timer Started");
  setInterval(renderTimer, 1000);
}

function renderTimer() {
  let timeElapsed = 0;
  let total, sec, min, hrs, hrsRem, parsed;
  timeElapsed = Date.now() - startTime;
  // 00hrs 00mins 00sec
  total = Math.floor(timeElapsed / 1000);
  hrs = Math.floor(total / 3600);
  hrsRem = total % 3600;
  min = Math.floor(hrsRem / 60);
  sec = hrsRem % 60;
  parsed = hrs + "hrs " + min + "mins " + sec + "sec";
  console.log("Total:", total, "Hrs:", hrs, "Mins:", min, "Sec:", sec);

  document.getElementById("timerDisplay").textContent = parsed;
} 

window.startTimer = startTimer;