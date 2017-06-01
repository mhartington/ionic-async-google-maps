import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'lazy-map',
  template: `
        <ng-content></ng-content>
  `
})
export class LoadMapComponent {
  @Output() mapLoaded = new EventEmitter()
  scriptEl;
  apiUrl = 'https://maps.googleapis.com/maps/api/js';
  constructor() {
    window['callback'] = () => {
      this.mapLoaded.emit()
    }
  }
  ngOnInit() {
    this.scriptEl = document.createElement('script');
    this.scriptEl.src = `${this.apiUrl}?callback=callback`
    document.body.appendChild(this.scriptEl);
  }
}
