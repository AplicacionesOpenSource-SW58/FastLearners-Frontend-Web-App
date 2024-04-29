export class Students {
  id: number;
  name: string;
  lastName: string;
  password: string;
  email: string;
  isUserPremium: boolean;

  constructor(id: number, name: string, lastName: string, password: string, email: string, isUserPremium: boolean) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.isUserPremium = isUserPremium;
  }
}
