import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BasicPage, CheckboxPage, ConfirmPage, PromptPage, RadioPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    PromptPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PromptPage
  ],
  providers: []
})
export class AppModule {}
