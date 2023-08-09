import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitInword'
})
export class DigitInwordPipe implements PipeTransform {

  transform(digit: number): any {
    let word: String;
    switch (digit) {
      case 1:
        word = "one";
        break;
      case 2:
        word = "two";
        break;
      case 3:
        word = "three";
        break;
      case 4:
        word = "four";
        break;
      case 5:
        word = "five";
        break;
      case 6:
        word = "six";
        break;
      case 7:
        word = "seven";
        break;
      case 8:
        word = "eight";
        break;
      case 9:
        word = "nine";
        break;
      case 0:
        word = "zero";
        break;
      default:
        word = "Invaid digit.";
        break;
    }
    return word;
  }

}
