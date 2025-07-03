import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { writeFileSync } from 'fs';

@Injectable()
export class UploadService {
  async handleBase64Upload(imagen: string) {
    const nombre = Math.floor(Math.random() * 1000000);
    const path = `C:/image-server/${nombre}.jpg`;
    writeFileSync(path, Buffer.from(imagen, 'base64'));
    return { error: false, msg: 'Imagen Cargada con Exito', path };
  }
}
