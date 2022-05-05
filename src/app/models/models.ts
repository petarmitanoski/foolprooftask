import { FileStatus, FileType } from "./enums";

export class User {
    id: number;
    givenName: string;
    familyName: string;
}

export class File {
    id: number;
    creationDateTime: Date;
    createdBy: number;
    title: string;
    fileId: string;
    live: boolean;
    modifiedBy: number;
    modifiedDateTime: Date;
    popularity: number;
    scheduled: boolean;
    status: FileStatus;
    type: FileType;
    uri: string;
    version: number;
}

export class Type {
    id: FileType;
    creationDateTime: Date;
    name: string;
    colourId: string;
    description: string;
    documentsCount: number;
}

export class DisplayFile extends File {
    createdByUser: string;
    modifiedByUser: string;
}