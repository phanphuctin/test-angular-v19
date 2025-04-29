import { inject, Injectable } from "@angular/core";
import { Auth, browserSessionPersistence, setPersistence, signInWithEmailAndPassword, signOut, User } from "@angular/fire/auth";
import { from, Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {

    user$: Observable<User | null>;

    firebaseAuth = inject(Auth);

    constructor() {
        this.setSessionStoragePersistence();

    }

    private setSessionStoragePersistence(): void {
        setPersistence(this.firebaseAuth, browserSessionPersistence);
      }

      login(email: string, password: string): Observable<void> {
        const promise = signInWithEmailAndPassword(
          this.firebaseAuth,
          email,
          password
        ).then(() => {
          //
        });
        return from(promise);
      }
    
      logout(): Observable<void> {
        const promise = signOut(this.firebaseAuth).then(() => {
          sessionStorage.clear();
        });
        return from(promise);
      }

}