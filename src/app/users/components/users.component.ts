import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { User } from '../../models/models';
import { UsersFacade } from '../../state/users/users.facade';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  constructor(public usersFacade: UsersFacade) { }

  ngOnInit(): void {
    this.usersFacade.loadUsers();
  }

  trackByFn(index: number, item: User) {
    return item.id;
  }
}
