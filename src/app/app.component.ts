import { Component } from '@angular/core';

import { faker } from '@faker-js/faker';
// Source: https://v6.fakerjs.dev/guide/#installation

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  //Stats
  correct = 0;
  errors = 0;
  letterIndex = 0;
  errorMessage = "";
  inputIndex = 0;
  index = 0;
  accuracy = 0;
  WPM=0;
  timeTaken=0;
  possibleMistakes=0;
  sentence=[];

  onInput(value: string) {
    // console.log(value);
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter:string) {
    // letter not typed yet
    if (!enteredLetter) {
      return 'pending';
    }
    // ternary expression for typing correct letter
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

  //Check letetr
  checkLetter = (letter: string, input: string) => {
    if (this.index === 0 && this.letterIndex === 0) {
      this.correct = 0;
    }
    if (this.letterIndex === this.inputIndex) {
      if (letter[this.letterIndex] === input) {
        this.letterIndex++;
        this.inputIndex++;
        this.correct++;
        this.errorMessage = "";
        return;
      } else {
        if (input !== "" && input !== " ") {
          this.errorMessage = `You mistyped the letter ${
            letter[this.letterIndex]
          }`;
          this.errors++;
        } else {
          //
        }
      }
    }
  };

  

}
