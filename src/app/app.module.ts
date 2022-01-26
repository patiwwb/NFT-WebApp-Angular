import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InstallComponent } from './components/install/install.component';
import { WalletBalanceComponent } from './components/wallet-balance/wallet-balance.component';
import { NFTImageComponent } from './components/nftimage/nftimage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstallComponent,
    WalletBalanceComponent,
    NFTImageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
