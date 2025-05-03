import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  ); //pipes de validacion importado de npm i class-validator y class-transformer

  app.enableCors();//configuración de cors

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
