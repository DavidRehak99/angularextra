import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subida } from './subida';

describe('Subida', () => {
  let component: Subida;
  let fixture: ComponentFixture<Subida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subida],
    }).compileComponents();

    fixture = TestBed.createComponent(Subida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
