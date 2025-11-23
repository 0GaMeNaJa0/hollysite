export interface UserData {
  id: string;
  userName: string;
  surName: string;
  avatarUrl: string;
  email: string;
  role: string;
  status: string;
  telephone: string;
  createDate: string;
  lastAction: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
}

export interface UserStoreTypes {
  users: UserData[];
  user: UserData;

  getUsers: () => void;
  getUserById: (id: string) => void;
}