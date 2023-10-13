import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(CORS);
  const configService = app.get(ConfigService);
  app.use(morgan('dev'));
  app.setGlobalPrefix('/api');
  await app.listen(configService.get('PORT'));
}
bootstrap();
