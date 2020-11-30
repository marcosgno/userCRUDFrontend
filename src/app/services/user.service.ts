import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpringListResponse } from '../models/responses/spring-list-response';
import { User } from '../models/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path='https://example-user-crud-backend.herokuapp.com/api/v1/';  

  constructor(private httpClient: HttpClient) { }

  show(id) {
    return this.httpClient.get<User>(this.path + 'users/' + id).toPromise();
  }

  cpfSearch(cpf) {
    return this.httpClient.get<User>(this.path + 'users/cpf/' + cpf).toPromise();
  }  

  list(page) {
    return this.httpClient.get<SpringListResponse<User>>(this.path + 'users',
    {
      params: {
        page,
        sort: 'id,desc'
      }
    }).toPromise();
  }

  search(page, value){
    return this.httpClient.get<SpringListResponse<User>>(this.path + 'users/find/' + value,      
    {
      params: {
        page,
        sort: 'id,desc'
      }
    }).toPromise();
  }  

  create(content: User) {
    return this.httpClient.post(this.path + 'users', content).toPromise();
  }

  update(content: User, id) {
    return this.httpClient.put(this.path + 'users/'+id, content).toPromise();
  } 

  delete(user: User) {
    return this.httpClient.delete(this.path + 'users/' + user.id).toPromise();
  }  
}
