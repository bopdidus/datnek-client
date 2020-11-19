import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu-cmp',
  templateUrl: './menu-cmp.component.html',
  styleUrls: ['./menu-cmp.component.css']
})
export class MenuCmpComponent implements OnInit {


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
   }

  ngOnInit() {
    
  }

  

}
