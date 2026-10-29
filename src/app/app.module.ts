// app.module.ts
import { HttpClientModule } from '@angular/common/http'; // Importante
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Archivo } from './services/service.archivo';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, FormsModule],
  providers: [ provideBrowserGlobalErrorListeners(), Archivo],
  bootstrap: [App],
})
export class AppModule { }