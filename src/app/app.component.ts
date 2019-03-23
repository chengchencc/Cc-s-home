import { Component, NgModuleFactoryLoader, Compiler, Injector, OnInit, NgModuleFactory, ChangeDetectionStrategy, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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



}