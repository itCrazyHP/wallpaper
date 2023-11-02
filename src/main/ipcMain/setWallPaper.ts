import { IpcMainEvent, IpcMainInvokeEvent,  ipcMain } from "electron";
import { downloadFile } from "../util";
import  wallpaper from 'wallpaper';
import { resolve } from "node:path";
import fs from "node:fs";

ipcMain.on('setWallPaper', async(_event: IpcMainEvent, url: string,path:string) => {
    //url.split('/').pop()!为图片photo-1511300636408-a63a89df3482.jpg，path为存放路径C:\Users\hp\Desktop\paper
    const localFile = resolve(path,url.split('/').pop()!)//C:\Users\hp\Desktop\study\electron-wallpaper\wallpaper\wallpaper\paper7.jpg
    //resolve将俩者路径就是存放地址结合C:\Users\hp\Desktop\paper\photo-1511300636408-a63a89df3482.jpg
    
    
    
    const file = await downloadFile(url,localFile)
    wallpaper.set(file, { screen: 'all', scale: 'auto' })
})

ipcMain.handle('checkDirectory',async(_event:IpcMainInvokeEvent,path:string)=>{
   return fs.existsSync(path)
})