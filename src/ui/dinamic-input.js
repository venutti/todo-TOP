export default class DinamicInput {
  constructor() {
    this.callbackSubmit = undefined;  
    this.input = document.querySelector('.dinamic-input');
  }
  show() {
    this.init();
    this.input.classList.add('active');
  }
  close() {
    this.input.classList.remove('active');
  }
  init() {
    this.input.querySelector('input').value = '';
    this.input.querySelector('.cancel').onclick = () => this.close();
    this.input.querySelector('.submit').onclick = () => {
      const value = this.input.querySelector('input').value;
      if(value) this.callbackSubmit(value);
      this.close();
    };
  }

};