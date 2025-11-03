import { HttpInterceptorFn ,HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Auth } from "../services/auth";

export const tokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authService = inject(Auth);
  const authToken = authService.getToken();

  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
       Authorization: `Bearer ${authToken}`
      }
    });

    return next(authReq);
  }

  return next(req);
}
