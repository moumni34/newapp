export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
  roles: Role[];
  role: Role[]; // Change type to Role[]
}

interface Role {
  name: string;
}
