import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  authForm!: FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService, private cookieService:CookieService, private router:Router) { }

  ngOnInit() {
    this.authForm=this.fb.group({
      email:['',[Validators.email, Validators.required]],
      password:['',Validators.required]
    })
  }

  onSubmit(form:FormGroup){
    if(form.valid){
      this.authService.login(form.value.email, form.value.password).subscribe(data=>{
        if(data.success){
          this.cookieService.set("token", data.token);
          this.router.navigate(["/home"]);
        }
      });

      


    }else{
      console.log("Complete todos los datos requeridos")
    }
    console.log(form)
  }

  admin(){
          this.router.navigate(["./auth/login-admin"]);
      }

  


}
