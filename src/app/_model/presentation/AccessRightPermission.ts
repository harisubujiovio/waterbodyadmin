import { AccessRights } from "./AccessRights";

export interface AccessRightPermission {
    count: number;
    next: string;
    previous: string;
    results: AccessRights[]
  }