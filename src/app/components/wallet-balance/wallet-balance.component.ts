import { Component, OnInit } from '@angular/core';
import { BigNumber, ethers } from 'ethers';

declare let window: any;

@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.css']
})
export class WalletBalanceComponent implements OnInit {

  balance : BigNumber;
  balanceString : String = '';
  showBalance : boolean = false;

  constructor() { }

  async ngOnInit(){

  }

  async getBalance() {
    this.showBalance = true;
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    this.balance = await provider.getBalance(account);
    this.balanceString =  ethers.utils.formatEther(this.balance);
  }

  hideBalance () {
    this.showBalance = false;
  }

}
