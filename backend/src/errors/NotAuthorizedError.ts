export class NotAuthorizedError extends Error {
  constructor(msg: string = 'Not authorized') {
    super(msg);
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    this.name = 'NotAuthorizedError';
  }
}
