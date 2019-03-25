import { Component, NgModuleFactoryLoader, Compiler, Injector, OnInit, NgModuleFactory, ChangeDetectionStrategy, Directive } from '@angular/core';
import { slideInAnimation } from './common/animate/slide';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {
  title = 'ng7demo';

  constructor(
    private loader: NgModuleFactoryLoader,
    private compiler: Compiler
  ) {
    
  }

  async ngOnInit() {


  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}