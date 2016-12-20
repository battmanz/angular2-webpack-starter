import { inject, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('Home', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HomeComponent
    ]
  }));

  it('should log in ngOnInit', inject([HomeComponent], (home: HomeComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Hello from the HomeComponent!');
  }));
});
