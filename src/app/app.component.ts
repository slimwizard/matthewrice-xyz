import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matthewrice-xyz';

  navLinks = [{route: '/about', label: "About"},
              {route: '/contact', label: "Contact"},
              {route: '/projects', label: "Projects"}
  ]


}
