export class ForbiddenError extends Error {
  constructor(msg: string = 'Forbidden') {
    super(msg);
    Object.setPrototypeOf(this, ForbiddenError.prototype);
    this.name = 'ForbiddenError';
  }
}
