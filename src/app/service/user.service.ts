import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../components/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'api';

  constructor(private _http: HttpClient) { }

  /**
   * adding user to InMemory
   * @param user 
   * @author Subash
   */
  addUsers(user: User): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })

    return this._http.post(this.url + '/users', user, { headers: headers })
      .pipe(
        map(res => res), 
        catchError(this.handleError)
      );
  }

  /**
   * returning users list
   * @author Subash
   */
  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.url + '/users')
      .pipe(
        map(res => res), 
        catchError(this.handleError)
      );
  }

  /**
   * returning last index id value
   * @author Subash
   */
  getLastIndexId(): Observable<number> {
      return this._http.get<User[]>(this.url + '/users')
        .pipe(
          map(res => res[res.length - 1].id),
          catchError(this.handleError)
        )
  }

  /**
   * Get last user data from server
   * @author Subash
   */
  getLastUser(): Observable<User> {
    return this._http.get<User[]>(this.url + '/users')
      .pipe(
        map(res => res[res.length - 1]),
        catchError(this.handleError)
      )
  }

  /**
   * handling http errors
   * @param err 
   * @author Subash
   */
  handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.message || 'server error');
  }
}
