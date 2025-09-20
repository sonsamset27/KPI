import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { KpiunitComponent } from './kpiunit/kpiunit.component';
import { KpipersonalComponent } from './kpipersonal/kpipersonal.component';
import { KpiapproveComponent } from './kpiapprove/kpiapprove.component';
import { KpiselfComponent } from './kpiself/kpiself.component';
import { KpiuniversityComponent } from './kpiuniversity/kpiuniversity.component';
import { MykpiComponent } from './mykpi/mykpi.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    MenuComponent,
    TopBarComponent,
    KpiunitComponent,
    KpipersonalComponent,
    KpiapproveComponent,
    KpiselfComponent,
    KpiuniversityComponent,
    MykpiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
