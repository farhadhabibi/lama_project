import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { AccountComponent } from './account/account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GlogGuard } from './glog.guard';
import { MyServiceService } from './my-service.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    AccountComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
           {
           path: '',
           component: AccountComponent

        },
        {
           path: "log",
           component: LogComponent

        },
        {
          path: "sign-in",
          canActivate: [GlogGuard],
          component: SignInComponent
        }


     ]),
  ],
  providers: [MyServiceService, GlogGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
