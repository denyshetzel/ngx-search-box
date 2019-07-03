import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSearchBoxPanelComponent } from './ngx-search-box-panel.component';

describe('NgxSearchBoxPanelComponent', () => {
  let component: NgxSearchBoxPanelComponent;
  let fixture: ComponentFixture<NgxSearchBoxPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSearchBoxPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSearchBoxPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
