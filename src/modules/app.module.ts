import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from '@modules/common/common.module';
import { GatewayModule } from './gateway/gateway.module';
import { FirebaseAdminModule } from './common/firebase-admin/firebase-admin.module';
import { FIREBASE_CREDENTIALS, FIREBASE_ISSUER, FIREBASE_PROJECT_ID } from './common/environment';
import * as firebase from 'firebase-admin';
import { FirebaseAuthModule } from './common/firebase-admin';
@Module({
  imports: [
    ConfigModule.forRoot(),
    FirebaseAuthModule.register({
      audience: FIREBASE_PROJECT_ID,
      issuer: FIREBASE_ISSUER,
    }),
    FirebaseAdminModule.init({
      credential: firebase.credential.cert(JSON.parse(FIREBASE_CREDENTIALS)),
    }),
    CommonModule,
    GatewayModule,
  ],
})
export class AppModule {}
