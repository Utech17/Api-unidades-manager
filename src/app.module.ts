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
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    PrismaModule,
    UnitsModule,
    ModelModule,
    UploadModule,
  ],
})
export class AppModule {}
