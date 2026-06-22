import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaContatos } from './adiciona-contatos';

describe('AdicionaContatos', () => {
  let component: AdicionaContatos;
  let fixture: ComponentFixture<AdicionaContatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionaContatos],
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionaContatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
