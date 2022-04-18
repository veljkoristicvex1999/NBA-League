import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
    currentUser: string;
  currentAdmin: string;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let  promenljiva1= JSON.stringify(localStorage.getItem('korisnik'));
      this.currentUser=promenljiva1.substring(1,promenljiva1.length-1)
      let  promenljiva2= JSON.stringify(localStorage.getItem('admin'));
      this.currentAdmin=promenljiva2.substring(1,promenljiva2.length-1)
        // const currentUser=JSON.parse(localStorage.getItem('korisnik') || '{}');
        // const currentAdmin=JSON.parse(localStorage.getItem('admin') || '{}');
        
        if(localStorage.getItem("korisnik")){
            const authHeader=req.clone(
                {
                    headers: req.headers.set("X-AUTH-HEADER", this.currentUser)
                }
            )
            req = authHeader;
        }
        else if (localStorage.getItem('admin')) {
            const authHeader=req.clone(
                {
                    headers: req.headers.set("X-AUTH-HEADER", this.currentAdmin)
                }
            )
            req = authHeader;
        }
        return next.handle(req);
    }
}