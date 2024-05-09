export type CreateUserDTO = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};

export type LoginUserDTO = {
  email: string;
  password: string;
};
