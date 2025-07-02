import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reclutador } from './reclutador';

describe('Reclutador', () => {
  let component: Reclutador;
  let fixture: ComponentFixture<Reclutador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reclutador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reclutador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
