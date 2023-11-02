import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util'
import fetch from 'node-fetch';
import { dialog } from 'electron';
import { inspect } from 'util';

export const downloadFile = async(url:string,path:string) =>{
    
    const streamPipeline = promisify(pipeline);

    const response = await fetch(url);

    
    console.log(inspect(response, { showHidden: false, depth: null }));

    if (!response.ok) {
        dialog.showErrorBox('错误提示','图片下载失败')
        throw new Error(`unexpected response ${response.statusText}`);
    }
    
    
    await streamPipeline(response.body!, createWriteStream(path));

    return path
}