import { app as firebase } from 'firebase-admin/lib/firebase-namespace-api';
import { auth as firebaseAuth } from 'firebase-admin/lib/auth';

export type FirebaseApp = firebase.App;
export type UserRecord = firebaseAuth.UserRecord;
export type FirebaseAuth = firebaseAuth.Auth;
