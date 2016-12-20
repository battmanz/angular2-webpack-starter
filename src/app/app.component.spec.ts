import { inject, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppState } from './app-state.service';

describe('App', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppState,
      AppComponent
    ]
  }));

  it('should have a message', inject([AppComponent], (app: AppComponent) => {
    expect(app.message).toEqual('Hello World!');
  }));
});
