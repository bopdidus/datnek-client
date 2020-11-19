import { Component, Inject } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datnek';
  texte:string;
  langue:String;
  color:string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    this.langue="Français";
    this.color='gray';
     this.translate.get("menu.close").subscribe((data:any)=>{this.texte= data;});
  }
  

  stateDialog(state: boolean) {
    if(state == true){
      this.translate.get("menu.open").subscribe((data:any)=>{this.texte= data;});
      this.color='green';
    }
    else if(state == false){
      this.color='gray';
      this.translate.get("menu.close").subscribe((data:any)=>{this.texte= data;});
    }
  }

  useLanguage(language: string) {
    if(language == 'en'){
      this.langue ="English";
    }else if(language == 'fr'){
      this.langue ="Français";
    }else if(language == 'ne'){
      this.langue ="Nederlands";
    }
    this.translate.use(language);
    this.translate.get("menu.close").subscribe((data:any)=>{this.texte= data;});
  }

  
  
}

