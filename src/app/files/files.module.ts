import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './components/files.component';
import { FilesEffects } from '../state/files/files.effects';
import { filesReducer } from '../state/files/files.reducer';
import { TranslateFileTypePipe } from '../pipes/translate-file-type.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FilesComponent, TranslateFileTypePipe],
  imports: [
    CommonModule,
    FilesRoutingModule,
    StoreModule.forFeature('filesState', filesReducer),
    EffectsModule.forFeature([FilesEffects]),
    ReactiveFormsModule
  ]
})
export class FilesModule { }
