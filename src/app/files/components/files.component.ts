import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { File } from '../../models/models';
import { UsersFacade } from '../../state/users/users.facade';
import { FilesFacade } from '../../state/files/files.facade';
import { FileType } from '../../models/enums';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilesComponent implements OnInit, OnDestroy {

  public showAllFiles: boolean = true;
  public profileFileType: FileType = FileType.Profile;
  public articleFileType: FileType = FileType.Article;

  public contactForm = new FormGroup({
    fileName: new FormControl('')
  });
  
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  
  constructor(public filesFacade: FilesFacade, public usersFacade: UsersFacade) { }

  ngOnInit(): void {
    this.usersFacade.loadUsers();
    this.filesFacade.loadFiles();

    this.contactForm.controls["fileName"].valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(value => {
      this.filesFacade.searchValue.next(value);
    });
  }

  trackByFn(index: number, item: File) {
    return item.id;
  }

  toggleView(value: boolean) {
    this.showAllFiles = value;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();}
}
