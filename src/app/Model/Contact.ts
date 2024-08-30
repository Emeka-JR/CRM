export class contact {
    constructor(
      public name: string,
      public company: string,
      public email: string,
      public phone: number,
      public id?: string,
      public notes?: string[] // Change from string to string[]
    ) {}
  }
  