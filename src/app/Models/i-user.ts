export interface IUser {
  _id?: string
  firstName: string,
  lastName: string,
  birthDate: string
  email: string,
  password: string,
  isHost?: boolean
  address?: object
  gender?: string
  phone?: string,
  img?: string

}
