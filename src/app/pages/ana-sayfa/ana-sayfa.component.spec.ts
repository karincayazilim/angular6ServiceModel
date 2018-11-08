
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaSayfaComponent } from './ana-sayfa.component';

describe('AnaSayfaComponent', () => {
  let component: AnaSayfaComponent;
  let fixture: ComponentFixture<AnaSayfaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaSayfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaSayfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
