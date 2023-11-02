import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setWallPaper:(url:string,path:string)=>void,
      downloadImage:(url:string)=>void,
      setImageSaveDirectory:()=>Promise<string>,
      checkDirectory:(url:string)=>Promise<boolean>,
      hiddenWindow:()=>void,
  }
}
}