import { IpcMainInvokeEvent, dialog, ipcMain } from "electron";

ipcMain.handle('setImageDirectory',async(_event:IpcMainInvokeEvent)=>{
    const res = await dialog.showOpenDialog({
        title:'图片保存路径',
        properties:['createDirectory','openDirectory']
    })
    console.log(res);
    
    if(!res.canceled && res.filePaths.length){
        return res.filePaths[0]
    }
    return undefined
})