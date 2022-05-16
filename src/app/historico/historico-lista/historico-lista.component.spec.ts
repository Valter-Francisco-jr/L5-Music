import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoListaComponent } from './historico-lista.component';

describe('HistoricoListaComponent', () => {
  let component: HistoricoListaComponent;
  let fixture: ComponentFixture<HistoricoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
