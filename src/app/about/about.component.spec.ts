import { inject, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('About', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AboutComponent
    ]
  }));

  it('should log ngOnInit', inject([AboutComponent], (about: AboutComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello from the AboutComponent!');
  }));
});
