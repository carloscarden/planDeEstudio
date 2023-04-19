import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/perfileria/user';
import { Role } from 'src/app/_models/perfileria/role';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;
  public cambiarDeEstadoSesionDeUsuario = new EventEmitter();

  constructor(private http: HttpClient) {
    // tslint:disable-next-line: no-non-null-assertion
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  emitirCambiarEstadoDeSesion(sesion: any): void {
    this.cambiarDeEstadoSesionDeUsuario.emit(sesion);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  public get currentUserRoles(): Role {
    return this.currentUserSubject.value.role;
  }


  nuevoUsuario(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }




  login(username: string, password: string): any {
    return this.http.post<any>(`http://localhost:4200/users/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


  setearRol(rol: any): void {
    const c = this.currentUserValue;
    this.currentUserSubject.next(c);
    console.log('rol seteado', c);
    console.log('nuevoRol', this.currentUserValue);

  }

}
