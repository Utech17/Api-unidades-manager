import { Injectable } from '@nestjs/common';
import { Express } from 'express';

@Injectable()
export class UploadService {
  async handleFileUpload(file: Express.Multer.File) {
    return {
      filename: file.filename,
      path: `C:/image-server/${file.filename}`,
    };
  }
}
