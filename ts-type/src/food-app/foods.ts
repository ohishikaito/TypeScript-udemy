import { Foodsable } from "./interface";
// import * as interfaces from "./interface.js";
import { Food } from "./food";

// export class Foods implements interfaces.Foodsable {
export class Foods implements Foodsable {
  private static instance: Foods;
  elements = document.querySelectorAll<HTMLDivElement>(".food");
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach((element) => {
      if (element.classList.contains("food--active")) {
        this._activeElements.push(element);
      }
    });
    return this._activeElements;
  }
  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach((element) => {
      const foodScore = element.querySelector(".food__score");
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent));
        // console.log(foodScore.textContent);
        // console.log(Number(foodScore.textContent));
      }
    });
    return this._activeElementsScore;
  }
  private constructor() {
    this.elements.forEach((element) => {
      // element.addEventListener;
      new Food(element);
    });
  }
  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods();
    }
    return Foods.instance;
  }
}
//
