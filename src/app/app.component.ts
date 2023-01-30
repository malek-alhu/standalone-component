import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { addUser } from './store/user.actions';
import { User, userSelector, UserState } from './store/user.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'standalone';
  users$ = this.store.select(userSelector);

  constructor(private store: Store<UserState>) {}

  createUser() {
    const user: User = {
      userId: 1,
      name: 'Subrat',
    };
    this.store.dispatch(addUser(user));
  }
}
