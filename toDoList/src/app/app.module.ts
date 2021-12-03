import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, HeaderComponent],
  imports: [BrowserModule, NgbModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
