import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';

import FiredGuys from '../../../artifacts/contracts/MyNFT.sol/FiredGuys.json';

declare let window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  totalMinted;
  //contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  contractAddress = '0xd99A32b8De3A5545BFe59bDd0c1A285e998267ca';
  provider;
  signer;
  contract;


  constructor() { }

  async ngOnInit() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    // get the end user
    this.signer = this.provider.getSigner();
    // get the smart contract
    this.contract = new ethers.Contract(this.contractAddress, FiredGuys.abi, this.signer);
    this.getCount();
  }

  async getCount() {
    const count = await this.contract.count();
    console.log(parseInt(count));
    this.totalMinted = parseInt(count);
  }


}
