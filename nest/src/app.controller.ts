import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import  _ from 'lodash';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const files = readdirSync(resolve(__dirname,'..','wallpaper'))
    // [
    //   'icon.png',
    //   'photo-1451187580459-43490279c0fa.jpg',
    //   'photo-1485470733090-0aae1788d5af.jpg',
    //   'photo-1493514789931-586cb221d7a7.jpg',
    //   'photo-1511300636408-a63a89df3482.jpg',
    //   'photo-1540959733332-eab4deabeeaf.jpg',
    //   'photo-1608501078713-8e445a709b39.jpg',
    //   'photo-1682685797828-d3b2561deef4.jpg'
    // ]
    
    // const file = readFileSync(resolve(__dirname,'../wallpaper',files[_.random(files.length-1)]))
    
    // res.type('image/jpeg')

    // return res.send(file)
    return 'http://localhost:3000/wallpaper/' + files[_.random(files.length-1)]
  }
}
