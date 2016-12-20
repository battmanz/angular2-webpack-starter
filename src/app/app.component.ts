import { Component } from '@angular/core';
import { AppState } from './app-state.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'sds-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {

  /**
   * A message to display to the user.
   */
  public message = 'Hello World!';

  /**
   * Constructs a new instance of the AppComponent class.
   * 
   * @param appState 
   */
  constructor(private appState: AppState) {
  }
}
