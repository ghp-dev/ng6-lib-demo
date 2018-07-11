import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, TvmazeService } from 'tvmaze';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show$: Observable<Show>;

  constructor(private tvmaze: TvmazeService) {
    this.show$ = this.tvmaze.getShow(336);
  }
}
