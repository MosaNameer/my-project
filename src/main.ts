import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, //* remove the properties that are not in the DTO
      forbidNonWhitelisted: true, //* throw an error if the properties are not in the DTO
    }
  ));

  await app.listen(3000, async () => {
    logger.debug(`Server is running on ${await app.getUrl()}`);
  })
}
bootstrap();
