import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesVilliansGridComponent } from './heroes-villians-grid.component';

describe('HeroesVilliansGridComponent', () => {
  let component: HeroesVilliansGridComponent;
  let fixture: ComponentFixture<HeroesVilliansGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesVilliansGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesVilliansGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
