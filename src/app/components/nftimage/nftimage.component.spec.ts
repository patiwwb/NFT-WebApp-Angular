import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NFTImageComponent } from './nftimage.component';

describe('NFTImageComponent', () => {
  let component: NFTImageComponent;
  let fixture: ComponentFixture<NFTImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NFTImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NFTImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
