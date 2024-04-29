import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";

@Injectable()
export class UserGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
        console.log("canActivate")
        const request = context.switchToHttp().getRequest<Request>();
        if (request.headers["token"] != "my-token"){
            return false;
        }
        return true;
    }
}