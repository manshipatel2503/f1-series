import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreComponent ],
      imports: [BrowserModule, RouterModule.forRoot([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
