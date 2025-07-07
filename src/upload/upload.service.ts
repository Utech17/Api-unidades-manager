import { Injectable } from '@nestjs/common';
import { writeFileSync, existsSync, unlinkSync } from 'fs';

@Injectable()
export class UploadService {
  async saveUnitImage(base64Image: string, fileName?: string): Promise<string> {
    let nombre = fileName;
    if (!nombre) {
      nombre = `${Date.now()}_${Math.floor(Math.random() * 1000000)}.jpg`;
    }
    const path = `C:/image-server/${nombre}`;
    // Si ya existe, eliminar antes de sobrescribir
    if (existsSync(path)) {
      unlinkSync(path);
    }
    writeFileSync(path, Buffer.from(base64Image, 'base64'));
    return nombre;
  }
}
