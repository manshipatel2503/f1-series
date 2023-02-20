export class Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  fullName: string;
  nationality: string;
  permanentNumber: string;
  url: string;

  constructor(values: any = {}) {
    Object.assign(this, { ...values, fullName: values.givenName + ' ' + values.familyName });
    return this;
  }
}