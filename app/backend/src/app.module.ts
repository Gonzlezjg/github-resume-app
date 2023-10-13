import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { GithubChModule } from './github-ch/github-ch.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    GithubChModule,
  ],
})
export class AppModule {}
