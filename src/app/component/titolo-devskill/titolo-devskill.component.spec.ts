import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitoloDevskillComponent } from './titolo-devskill.component';

describe('TitoloDevskillComponent', () => {
  let component: TitoloDevskillComponent;
  let fixture: ComponentFixture<TitoloDevskillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TitoloDevskillComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitoloDevskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
