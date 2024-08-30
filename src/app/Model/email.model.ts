export class Email {
    constructor(
      public recipient: string,
      public subject: string,
      public body: string,
      public date: Date,
      public id?: string // Optional ID for tracking
    ) {}
  }
  