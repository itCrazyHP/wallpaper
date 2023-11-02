<template>
    <div>
        <main class="px-3 py-2 text-sm opacity-80 flex justify-between items-center drag">
            <section>桌面壁纸</section>
            <section class=" flex items-center justify-center gap-2">
                <pic class="nodrag" :class="{iconColor:($route.name === 'home')}" theme="outline" size="24"  @click="$router.push({name:'home'})"/>
                <setting-one class="nodrag" :class="{iconColor:($route.name === 'setting')}" theme="outline" size="24"  @click="$router.push({name:'setting'})"/>
                <div>
                    <close-small class="nodrag hover:text-[#e74c3c] duration-300" @click="hiddenWindow"  theme="outline" size="24"/>
                </div>
                
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import {Pic,SettingOne,CloseSmall} from '@icon-park/vue-next'
import useWallPaper from '@renderer/composable/useWallPaper';

const {hiddenWindow} = useWallPaper()
</script>

<style scoped>
.iconColor{
    @apply text-[#1abc9c];
}

</style>