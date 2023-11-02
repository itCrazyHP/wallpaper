import { IpcMainEvent, dialog, ipcMain } from "electron";
import { downloadFile } from "../util";

ipcMain.on('downloadImage', async (_event: IpcMainEvent, url: string) => {
    const fileName = url.split('/').pop()
    
    const res = await dialog.showSaveDialog({
        title: '图片下载',
        defaultPath: fileName,
        properties: ['createDirectory']
    })
    
    if (res.canceled === false && res.filePath) {
        downloadFile(url, res.filePath)
    }


})