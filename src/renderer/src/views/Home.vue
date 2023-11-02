<template>
    <div>
        <img ref="img" :src="configStore.config.url"  @click="load" class=" aspect-video nodrag cursor-pointer" draggable="false">

        <div class="flex m-3 items-center">
            <div class=" bg-gray-300 text-center p-3 rounded-lg w-3/4 hover:bg-gray-400 duration-200 nodrag" @click="setWallPaper">设为壁纸</div>
            <div class=" pl-3 text-sm text-slate-500 cursor-pointer nodrag " @click="downloadImage">下载壁纸</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ElLoading } from 'element-plus';
import {useConfigStore} from '@renderer/store/useConfigStore'
import {http} from '@renderer/plugins/axios'
import useWallPaper from '@renderer/composable/useWallPaper'

const { setWallPaper,downloadImage } = useWallPaper()
const configStore = useConfigStore()
const img = ref<HTMLImageElement>()
const load = async()=>{
    const res = await http.get('/')
    const loading =  ElLoading.service({fullscreen:true,lock:true,background:'rgba(255,255,255,.2)'})
    configStore.config.url = res.data
    img.value!.src = res.data
    img.value?.addEventListener('load',()=>{
        loading.close()
    })
}
onMounted(() => {
    if(!configStore.config.url)
    load()
})

</script>

<style scoped></style>