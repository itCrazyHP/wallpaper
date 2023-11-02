import router from "@renderer/router"
import { useConfigStore } from "@renderer/store/useConfigStore"
import { ElMessage } from "element-plus"

export default ()=>{
    const {config} = useConfigStore()
    const setWallPaper = async() =>{
        if(!await window.api.checkDirectory(config.saveDirectory)){
            ElMessage({type:'error',message:'路径不存在'})
            return router.push({name:'setting'})
        }
        window.api.setWallPaper(config.url,config.saveDirectory)
    }
    const downloadImage = () =>{
        window.api.downloadImage(config.url)
    }
    const setImageSaveDirectory = async() =>{
        const res = await window.api.setImageSaveDirectory()
        config.saveDirectory = res
    }
    const hiddenWindow = () =>{
        window.api.hiddenWindow()
    }
    return {setWallPaper , downloadImage , setImageSaveDirectory, hiddenWindow}
}