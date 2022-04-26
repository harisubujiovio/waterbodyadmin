import { UserProfile } from "./UserProfile";

export interface RoleWithUser {
    name: string;
    description: string;
    createdBy?: string;
    lastModifiedBy?: string;
    id?: string;
    users: UserProfile[]
  }