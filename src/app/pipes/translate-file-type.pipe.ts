import { Pipe, PipeTransform } from "@angular/core";

import { FileType } from "../models/enums";

@Pipe({
    name: 'translateFileType'
  })
  export class TranslateFileTypePipe implements PipeTransform {
    transform(value: FileType): string {
        switch (value) {
          case FileType.Article:
            return 'Article';
          case FileType.Profile:
            return 'Profile';
          default:
            return '';
        }
    }
  }