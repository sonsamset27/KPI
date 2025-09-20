import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KpiunitComponent } from './kpiunit/kpiunit.component';
import { KpipersonalComponent } from './kpipersonal/kpipersonal.component';
import { KpiapproveComponent } from './kpiapprove/kpiapprove.component';
import { KpiselfComponent } from './kpiself/kpiself.component';
import { KpiuniversityComponent } from './kpiuniversity/kpiuniversity.component';
import { MykpiComponent } from './mykpi/mykpi.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginFormComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'kpi/unit', component: KpiunitComponent, canActivate: [AuthGuard] },
  { path: 'kpi/personal', component: KpipersonalComponent, canActivate: [AuthGuard] },
  { path: 'kpi/approve', component: KpiapproveComponent, canActivate: [AuthGuard] },
  { path: 'kpi/self', component: KpiselfComponent, canActivate: [AuthGuard] },
  { path: 'kpi/university', component: KpiuniversityComponent, canActivate: [AuthGuard] },
  { path: 'kpi/mykpi', component: MykpiComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
