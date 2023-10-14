import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { GithubChModule } from './github-ch/github-ch.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client', 'dist'),
    }),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    GithubChModule,
  ],
})
export class AppModule {}
