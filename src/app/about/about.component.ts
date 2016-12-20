import { Component, OnInit } from '@angular/core';

/**
 * The component for the about page.
 */
@Component({
  selector: 'sds-about',
  styleUrls: ['./about.component.scss'],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  /**
   * @inheritdoc
   */
  public ngOnInit() {
    console.log('Hello from the AboutComponent!');
  }
}
