import { Component, OnInit } from '@angular/core';

/**
 * The component for the home page.
 */
@Component({
  selector: 'sds-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  /**
   * @inheritdoc
   */
  public ngOnInit() {
    console.log('Hello from the HomeComponent!');
  }
}
