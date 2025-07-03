import { Controller, Post, Body } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('base64')
  async uploadBase64(@Body('imagen') imagen: string) {
    return this.uploadService.handleBase64Upload(imagen);
  }
}
