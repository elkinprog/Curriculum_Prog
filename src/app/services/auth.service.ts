import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  register(email: string, password: string, nombre: string) {
    return createUserWithEmailAndPassword(this.auth, email, password).then((userCredential: { user: { uid: any; }; }) => {
      const uid = userCredential.user.uid;
      const userRef = doc(this.firestore, 'usuarios', uid);
      return setDoc(userRef, {
        uid,
        email,
        nombre,
        rol: 'reclutador'
      });
    });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
