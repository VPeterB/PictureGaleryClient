
export class LoginDTO {
  username: string;
  password: string
}

export class RegDTO {
  name: string;
  username: string;
  password: string;
  role: string
}

export class UserDTO{
  id: number;
  name: string;
  username: string;
  entryDate: Date;
  roles: string[]
}

export class AuthResponseDTO{
  id: number;
  accessToken: string;
}

export class PhotoDTO {
  id: number;
  filename: string;
  name: string;
  creationDate: Date;
}

