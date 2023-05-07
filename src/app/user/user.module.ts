import { NgModule } from "@angular/core";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserRoutingModule } from "./user.routing";
import { AddressPipe } from "../pipes/address.pipe";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PipeModule } from "../pipes/pipes.module";

@NgModule({
    declarations: [
        UserInfoComponent
    ],
    imports: [
        CommonModule,
        PipeModule,
        FontAwesomeModule,
        UserRoutingModule
    ],
    providers: []
  })
  export class UserModule {
  }