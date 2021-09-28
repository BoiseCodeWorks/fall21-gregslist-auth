import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'
import { logger } from '../utils/Logger.js'

class CarsService {
  async getBidsByAccount(accountId) {
    // NOTE                                      vvv can be shorthanded to simply accountId
    const bids = await dbContext.CarBids.find({ accountId: accountId }).sort('-bid').populate('car')
    return bids
  }

  async getCarById(carId) {
    const car = await dbContext.Cars.findById(carId).populate('creator', 'name picture')
    if (!car) {
      throw new BadRequest('Invalid Car Id')
    }
    return car
  }

  async editCar(carId, userId, carData) {
    const car = await this.getCarById(carId)
    if (userId !== car.creatorId.toString()) {
      throw new Forbidden('You shall not pass!!!')
    }
    car.make = carData.make || car.make
    car.model = carData.model || car.model
    car.price = carData.price || car.price
    car.description = carData.description || car.description
    car.year = carData.year || car.year
    car.img = carData.img || car.img
    await car.save()
    return car
    // const car = await dbContext.Cars.findOneAndUpdate({ _id: carId, creatorId: userId }, carData)
    // return car
  }

  async removeCar(carId, userId) {
    const car = await this.getCarById(carId)
    if (userId !== car.creatorId.toString()) {
      throw new Forbidden('You shall not pass!!!')
    }
    await car.remove()
    return car
  }

  async getBidsByCarId(carId) {
    const bids = await dbContext.CarBids.find({ carId }).sort('-bid').populate('bidder', 'name picture')
    return bids
  }

  async createBid(bidData) {
    await this.getCarById(bidData.carId)

    const bids = await this.getBidsByCarId(bidData.carId)
    logger.log('da bids', bids)

    if (bids.length && bidData.bid <= bids[0].bid) {
      throw new BadRequest('mo monies needed')
    }

    const bid = await dbContext.CarBids.create(bidData)
    return bid
  }

  async createCar(carData) {
    const car = await dbContext.Cars.create(carData)
    return car
  }

  async getCars(query) {
    const cars = await dbContext.Cars.find(query).populate('creator', 'name picture')
    return cars
  }
}

export const carsService = new CarsService()
