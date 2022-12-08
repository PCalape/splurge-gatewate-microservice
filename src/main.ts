require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { APP_PORT } from '@modules/common/environment';
import helmet from 'helmet';
import { AppModule } from '@modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [`'self'`, `'unsafe-inline'`, 'cdn.jsdelivr.net', 'fonts.googleapis.com'],
          fontSrc: [`'self'`, 'fonts.gstatic.com'],
          imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`, `cdn.jsdelivr.net`],
        },
      },
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(APP_PORT, '0.0.0.0').then(async () => {
    Logger.log(`✅  Application is running on: ${await app.getUrl()}`, 'NestJS');
  });
}

bootstrap().catch((e) => {
  Logger.error('❌  Error starting server', e, 'NestJS', false);
  throw e;
});
