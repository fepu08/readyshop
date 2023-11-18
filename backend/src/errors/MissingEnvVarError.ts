export class MissingEnvVarError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, MissingEnvVarError.prototype);
    this.name = 'MissingEnvVarError';
  }
}
