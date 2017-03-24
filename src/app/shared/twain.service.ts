import {Injectable} from '@angular/core';
/**
 * Created by arthur.panosyan on 3/23/2017.
 */
Injectable();
export class TwainService{
  getQuote(): Promise<string>{
    return Promise.resolve("testQuote");
  }
}
