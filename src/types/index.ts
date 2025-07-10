export interface Task {
  _id: string;
  taskName: string;
  user: string;
  createdAt: string;
  updatedAt:string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
} 