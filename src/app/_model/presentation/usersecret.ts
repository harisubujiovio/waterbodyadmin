export interface UserSecret {
  current_password: string;
  new_password: string;
}

export interface ResetPassword {
  email: string
}

export interface ConfirmPassword {
  uid: string
  token: string
  new_password: string
}