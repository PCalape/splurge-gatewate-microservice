import * as firebase from 'firebase-admin';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { AppOptions } from 'firebase-admin/lib/firebase-namespace-api';
import { FirebaseApp } from './firebase-types';

@Global()
@Module({})
export class FirebaseAdminModule {
  static init(options: AppOptions): DynamicModule {
    const firebaseAdmin: FirebaseApp = firebase.initializeApp(options);

    return {
      module: FirebaseAdminModule,
      providers: [
        {
          provide: 'FIREBASE_ADMIN',
          useValue: firebaseAdmin,
        },
      ],
      exports: ['FIREBASE_ADMIN'],
    };
  }
}
