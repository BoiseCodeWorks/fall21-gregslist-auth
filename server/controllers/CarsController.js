import { Auth0Provider } from '@bcwdev/auth0provider'
import { carsService } from '../services/CarsService.js'
import BaseController from '../utils/BaseController.js'
import { logger } from '../utils/Logger.js'

export class CarsController extends BaseController {
  constructor() {
    super('api/cars')
    this.router
      .get('', this.getCars)
      .get('/:carId', this.getCar)
      .get('/:carId/bid', this.getCarBids)
      .use(Auth0Provider.getAuthorizedUserInfo) // middleware
      .post('', this.createCar)
      .post('/:carId/bid', this.createBid)
      .delete('/:carId', this.removeCar)
      .put('/:carId', this.editCar)
  }

  async getCars(req, res, next) {
    try {
      const cars = await carsService.getCars(req.query)
      res.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async getCar(req, res, next) {
    try {
      const car = await carsService.getCarById(req.params.carId)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async createCar(req, res, next) {
    try {
      logger.log('who is the user?', req.userInfo)
      // REVIEW IMPORTANT never ever ever ever trust the client
      // force the creatorId to be the loggedin user
      // if (!req.userInfo.email_verified) {
      //   throw new UnAuthorized('Please validate your email')
      // }
      req.body.creatorId = req.userInfo.id
      const car = await carsService.createCar(req.body)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async getCarBids(req, res, next) {
    try {
      const carBids = await carsService.getBidsByCarId(req.params.carId)
      res.send(carBids)
    } catch (error) {
      next(error)
    }
  }

  async createBid(req, res, next) {
    try {
      req.body.carId = req.params.carId
      req.body.accountId = req.userInfo.id
      const carBid = await carsService.createBid(req.body)
      res.send(carBid)
    } catch (error) {
      next(error)
    }
  }

  async removeCar(req, res, next) {
    try {
      const car = await carsService.removeCar(req.params.carId, req.userInfo.id)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async editCar(req, res, next) {
    try {
      const car = await carsService.editCar(req.params.carId, req.userInfo.id, req.body)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }
}
