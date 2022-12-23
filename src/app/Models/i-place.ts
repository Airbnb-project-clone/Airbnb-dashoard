import { EnabledBlockingInitialNavigationFeature } from "@angular/router"

export interface IPlace {
  _id?: string
  title: String,
  description: String,
  location?: {
    country: String,
    city: String
  },
  unitType: String,
  advantages: [],
  about: [],
  images: [string],
  host: {
    address:
    {

    }
    birthDate: string,
    email: string,
    gender
    : string,
    isHost: boolean
    password: string
    phone: number
    firstName: string,
    lastName: string
  }
}
