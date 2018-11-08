
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SolMenuComponent } from './sol-menu.component';

describe('SolMenuComponent', () => {
  let component: SolMenuComponent;
  let fixture: ComponentFixture<SolMenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [SolMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
