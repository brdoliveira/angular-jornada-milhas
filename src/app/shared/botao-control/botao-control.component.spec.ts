import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoControlComponent } from './botao-control.component';

describe('BotaoControlComponent', () => {
  let component: BotaoControlComponent;
  let fixture: ComponentFixture<BotaoControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
