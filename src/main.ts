import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform.interceptor';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.setGlobalPrefix('/api/v1');

  await app.listen(3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
