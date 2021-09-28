import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from '../models/Car.js'
import { CarBidSchema } from '../models/CarBid.js'
import { Value as ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)
  Account = mongoose.model('Account', AccountSchema)
  Cars = mongoose.model('Car', CarSchema)
  CarBids = mongoose.model('CarBid', CarBidSchema)
}

export const dbContext = new DbContext()
