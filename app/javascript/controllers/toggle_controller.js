import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toggleElement"];
  static values = {
    showText: String,
    hideText: String
  }

  toggle(e) {
    e.target.innerText = e.target.innerText === this.showTextValue ? this.hideTextValue : this.showTextValue;
    this.toggleElementTarget.classList.toggle('d-none');
  }
}
