import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogOutComponent } from "./auth/logout.component";
import { SignUpComponent } from "./auth/signup.component";
import { SignInComponent } from "./auth/signin.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogOutComponent,
        SignUpComponent,
        SignInComponent
    ],
    imports: [
              BrowserModule,
              FormsModule,
              routing,
              ReactiveFormsModule,
              HttpModule
            ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
