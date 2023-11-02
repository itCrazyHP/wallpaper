<template>
    <div class=" p-3">
        <section>
            <h2 class=" flex justify-center py-5 opacity-80">参数设置</h2>
            <div class=" flex gap-1 items-center">
                <el-input v-model="config.saveDirectory" placeholder="壁纸保存路径" size="normal" disabled clearable @change="" />
                <el-button type="primary" size="default" @click="setImageSaveDirectory">图片下载保存路径</el-button>
            </div>
        </section>
        <div class=""> </div>
    </div>
</template>

<script setup lang="ts">
import {useConfigStore} from '@renderer/store/useConfigStore'
import useWallPaper from '@renderer/composable/useWallPaper'
const {setImageSaveDirectory} = useWallPaper()
const {config} = useConfigStore()
</script>

<style scoped></style>