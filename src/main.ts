import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: '*',
  // })
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();


// // src/main.ts
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// export async function createNestApplication() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors({ origin: '*', credentials: true });
//   return app;
// }

// // Jika sedang dijalankan secara lokal (bukan di serverless)
// if (process.env.NODE_ENV !== 'production') {
//   createNestApplication().then(app => app.listen(3000));
// }
