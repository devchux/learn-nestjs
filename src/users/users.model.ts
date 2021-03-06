/* eslint-disable prettier/prettier */
export class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public age: number,
    public email: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
}
