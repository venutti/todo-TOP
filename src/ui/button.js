export default class ButtonElement {
  constructor(text) {
    this.text = text;
    this.HTML = this.createHTML();
  }

  createHTML() {
    const $button = document.createElement("div");
    $button.classList.add("button");
    $button.textContent = this.text;
    return $button;
  }
}
