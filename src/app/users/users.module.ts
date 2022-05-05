import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component';
import { usersReducer } from '../state/users/users.reducer';
import { UsersEffects } from '../state/users/users.effects';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('usersState', usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersModule { }
