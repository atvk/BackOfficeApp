import { users } from "../data/users";
import { UserModel } from "../models/User";

export const getUsers = () => {
  return new Promise((resolve: (users: UserModel[]) => void) => {
    setTimeout(() => {
      resolve(users);
    }, 3000);
  });
};
