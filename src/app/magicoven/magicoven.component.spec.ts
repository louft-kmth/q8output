import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicovenComponent } from './magicoven.component';

describe('MagicovenComponent', () => {
  let component: MagicovenComponent;
  let fixture: ComponentFixture<MagicovenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicovenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicovenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
