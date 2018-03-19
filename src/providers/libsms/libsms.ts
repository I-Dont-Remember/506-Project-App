import { Injectable } from '@angular/core';

@Injectable()
export class LibSMS {

  public message: any = "I'm new here";

  constructor() {

  }

  setMessage(message) {
    this.message = message;
  }
}
