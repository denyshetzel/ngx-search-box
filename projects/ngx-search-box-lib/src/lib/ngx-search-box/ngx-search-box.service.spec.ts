import { TestBed } from '@angular/core/testing';
import { NgxSearchBoxService } from './ngx-search-box.service';


describe('NgxSearchBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSearchBoxService = TestBed.get(NgxSearchBoxService);
    expect(service).toBeTruthy();
  });
});
