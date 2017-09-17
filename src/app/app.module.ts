import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MainComponent }  from './main/main.component';
import { SolrComponent }      from './solr/solr.component';
import { TradeDataComponent } from  './trade/tradeData.component';
import { SharedService }        from  './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SolrComponent,
    TradeDataComponent
   
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
