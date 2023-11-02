import { BrowserWindow, Menu, Tray } from 'electron'
import path from 'path'
const createTray = (createWindow: () => BrowserWindow) => {
  
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/wallpaperTemplate.png' //32x32 像素的图片
        : '../../resources/md-wallpaper.png' //可以使用彩色图片，图标的最大大小为 256x256 像素，设置为32x32像素即可
    )
  )
  tray.on('double-click', () => {
    createWindow().show()
  })
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '设置壁纸', 
      click: () => {
        if (BrowserWindow.getAllWindows().length === 0)
          createWindow()
      }
    },
    { label: '退出', role: 'quit' }
  ])
  tray.setToolTip('壁纸软件')
  tray.setContextMenu(contextMenu)
}

export { createTray }