import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSearchBoxComponent } from './ngx-search-box.component';

describe('NgxSearchBoxComponent', () => {
  let component: NgxSearchBoxComponent;
  let fixture: ComponentFixture<NgxSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
