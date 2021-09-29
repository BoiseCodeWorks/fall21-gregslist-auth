import { SocketHandler } from '../utils/SocketHandler'

export class CarsHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket)
    this
      .on('JOIN_CAR_ROOM', this.joinCarRoom)
  }

  async joinCarRoom(carId) {
    // Kick the user out of previously joined rooms
    this.socket.rooms.forEach(r => {
      if (r.includes('car-')) {
        this.socket.leave(r)
      }
    })
    this.socket.join('car-' + carId)
    this.socket.emit('success', {
      message: 'You joined the car room'
    })
  }
}
