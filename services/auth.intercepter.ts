// import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { LoginService } from "./login.service";


// @Injectable()
// export class AuthIntercepter implements HttpInterceptor

// {
//     constructor(private login:LoginService){
        
//     }
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         let authReq = req;
//         const token = this.login.getToken();
//         console.log("inside interceptor");
//         if(token!=null){
//             authReq=authReq.clone({
//                 setHeaders:{ Authorization :`Bearer ${token}` },

//          } );
//         }

//         return next.handle(authReq);
        
//     }
    
// }

// export const authIntercepterProvider=[{
//     provide:HTTP_INTERCEPTORS,
//     useClass:AuthIntercepter,
//     multi:true,
// },
// ];