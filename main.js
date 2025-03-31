const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundMaterial: 'mica',
        maximizable: true,
        // fullscreen: true,
        // titleBarStyle: 'hidden',
        useContentSize: true,
        vibrancy: 'fullscreen-ui',
        // ...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {})
    })
    win.openDevTools()
    win.loadURL('https://www.bilibili.com/video/BV1GJ411x7h7')
}
app.whenReady().then(() => {
    createWindow()
  })
// console.log("")