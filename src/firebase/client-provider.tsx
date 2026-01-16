'use client';

import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { useMemo, type ReactNode } from 'react';
import { firebaseConfig } from './config';
import { FirebaseProvider } from './provider';

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  const value = useMemo(() => {
    // Before initializing, check if a Firebase app has already been initialized.
    // This is to avoid re-initializing the app on every render.
    const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    return { app, auth, firestore };
  }, []);

  return <FirebaseProvider value={value}>{children}</FirebaseProvider>;
}
