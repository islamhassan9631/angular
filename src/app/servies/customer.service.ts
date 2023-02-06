import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService  implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    let client=localStorage.getItem("client")
   let newRes=req.clone({
    setHeaders:{
      Authorization:`Bearer ${client}`
    },
   
   })
    
   return next.handle(newRes)
    throw new Error('Method not implemented.');
  }
}

