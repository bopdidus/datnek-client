import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCardModule, MatDialogModule, MatTableModule} from'@angular/material';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DataService } from './data.service';
import {Language } from './language';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogItem } from'./main-cmp/main-cmp.component';
import { MenuCmpComponent } from './menu-cmp/menu-cmp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainCmpComponent } from './main-cmp/main-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuCmpComponent,
    MainCmpComponent,
    DialogItem
  ],
  entryComponents: [
    DialogItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { 

}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
