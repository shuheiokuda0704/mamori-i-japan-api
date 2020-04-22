import { Moment } from 'moment-timezone'

export class User {
  userId: string
  phoneNumber: string
  created?: Moment
}

export class UserProfile {
  prefecture: number
  age: number
  gender: string
  job: string
}
