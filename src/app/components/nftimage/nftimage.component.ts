import { Component, OnInit, Input} from '@angular/core';
import { ethers } from 'ethers';
import FiredGuys from '../../../artifacts/contracts/MyNFT.sol/FiredGuys.json';


@Component({
  selector: 'app-nftimage',
  templateUrl: './nftimage.component.html',
  styleUrls: ['./nftimage.component.css']
})
export class NFTImageComponent implements OnInit {

  @Input() tokenId;
  @Input() getCount;
  @Input() contract;
  @Input() signer;
  contentId = 'QmTBxFm3SU3pmWQgGzb2ApZe9oMD6amZCAkyVa6HyvMDxB';
  metadataURI;
  imageURI;
  isMinted;

  constructor() { 

  }

  async ngOnInit() {
    this.metadataURI = `${this.contentId}/${this.tokenId}.json`;
    //this.imageURI = `https://gateway.pinata.cloud/ipfs/${this.contentId}/${this.tokenId}.png`;
    this.imageURI = `../../../assets/img/${this.tokenId}.png`;
    this.getMintedStatus();
  }

  async Count() {
    const count = await this.contract.count();
    console.log(parseInt(count));
    this.getCount = parseInt(count);
  }

  async getMintedStatus() {
    let result = await this.contract.isContentOwned(this.metadataURI);
    console.log(this.metadataURI,this.tokenId,result);
    this.isMinted = result;
  }

  async getURI() {
    const uri = await this.contract.tokenURI(this.tokenId);
    alert(uri);
  }

  async mintToken() {
    const connection = this.contract.connect(this.signer);
    const addr = connection.address;
    const result = await this.contract.payToMint(addr, this.metadataURI, {
      value: ethers.utils.parseEther('0.05'),
    });

    await result.wait();
    this.getMintedStatus();
    this.Count();
  };
}
