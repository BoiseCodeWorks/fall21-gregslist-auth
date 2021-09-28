import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { carsService } from '../services/CarsService.js'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo) // !IMPORTANT NOTHING EVER GOES ABOVE THIS LINE IN THIS CONTROLLER
      .get('', this.getUserAccount)
      .get('/carbids', this.getCarBids)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getCarBids(req, res, next) {
    try {
      const bids = await carsService.getBidsByAccount(req.userInfo.id)
      res.send(bids)
    } catch (error) {
      next(error)
    }
  }
}
