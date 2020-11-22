import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SloginComponent } from './slogin/slogin.component';
import { DeptInternalComponent } from './dept-internal/dept-internal.component';
import { InternalComponent } from './internal/internal.component';
import { CampExternalComponent } from './camp-external/camp-external.component';
import { ExternalComponent } from './external/external.component';
import { PbComponent } from './pb/pb.component';
import { PbviewComponent } from './pbview/pbview.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { LoginDeptComponent } from './login-dept/login-dept.component';
import { PbloginComponent } from './pblogin/pblogin.component';
import { CamploginComponent } from './camplogin/camplogin.component';
import { SinternalComponent } from './sinternal/sinternal.component';
import { SgradecardComponent } from './sgradecard/sgradecard.component';
import { Pb1Component } from './pb1/pb1.component';
import { PbaddComponent } from './pbadd/pbadd.component';
import { PbremoveComponent } from './pbremove/pbremove.component';
import { AddstudComponent } from './addstud/addstud.component';
import { RemovestudComponent } from './removestud/removestud.component';
import { Addinternal1Component } from './addinternal1/addinternal1.component';
import { Removestud1Component } from './removestud1/removestud1.component';

@NgModule({
  declarations: [
    AppComponent,
    SloginComponent,
    DeptInternalComponent,
    InternalComponent,
    CampExternalComponent,
    ExternalComponent,
    PbComponent,
    PbviewComponent,
    StudentComponent,
    HomeComponent,
    LoginDeptComponent,
    PbloginComponent,
    CamploginComponent,
    SinternalComponent,
    SgradecardComponent,
    Pb1Component,
    PbaddComponent,
    PbremoveComponent,
    AddstudComponent,
    RemovestudComponent,
    Addinternal1Component,
    Removestud1Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
