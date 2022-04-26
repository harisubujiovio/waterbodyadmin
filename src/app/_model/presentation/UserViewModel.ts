
import { UserProfile } from "./UserProfile";

export interface UserViewModel {
    count: number;
    next: string;
    previous: string;
    results: UserProfile[]
  }