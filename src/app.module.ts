import { Module } from '@nestjs/common';
import { UnitsModule } from './units/units.module';
import { ModelModule } from './model/model.module';
import { UploadModule } from './upload/upload.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: 'C:/image-server',
      serveRoot: '/api/v1/images',
    }),
    PrismaModule,
    UnitsModule,
    ModelModule,
    UploadModule,
  ],
})
export class AppModule {}
