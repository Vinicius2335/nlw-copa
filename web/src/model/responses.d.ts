export interface LoginResponseProps {
	token: string;
	user: UserProps;
}

export interface UserProps {
  name: string,
  avatarUrl: string
}