export interface User {
  id: string;
  name: string;
  login: string;
}

export interface Board {
  id: string;
  title: string;
}

export interface Column {
  id: string;
  title: string;
  order: number;
}

export interface DecodedToken {
  userId: User['id'];
  login: User['login'];
  iat: number;
}

export interface Task {
  id: string;
  userId: User['id'];
  boardId: Board['id'];
  columnId: Column['id'];
  title: string;
  description: string;
  order: number;
}
