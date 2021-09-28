import { Schema } from 'mongoose'

export const CarBidSchema = new Schema({
  accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  carId: { type: Schema.Types.ObjectId, required: true, ref: 'Car' },
  bid: { type: Number, required: true, min: 1 }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

CarBidSchema.virtual('bidder', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

CarBidSchema.virtual('car', {
  localField: 'carId',
  foreignField: '_id',
  justOne: true,
  ref: 'Car'
})
