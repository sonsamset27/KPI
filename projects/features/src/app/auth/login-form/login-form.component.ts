import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  username = '';
  password = '';
  error = '';

  constructor(private appService: AppService, private router: Router) {}

  onSubmit(): void {
    if (this.appService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']); // hoặc /mykpi nếu muốn
    } else {
      this.error = 'Tên đăng nhập hoặc mật khẩu không đúng!';
    }
  }
}
