import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NavComponent } from './common/nav/nav.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { InputComponent } from './components/input/input.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContractsComponent,
    InputComponent,
    DatepickerComponent,
    SelectComponent,
    TableComponent,
    ChatBotComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
