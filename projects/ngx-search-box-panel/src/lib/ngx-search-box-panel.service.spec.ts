import { TestBed } from '@angular/core/testing';

import { NgxSearchBoxPanelService } from './ngx-search-box-panel.service';

describe('NgxSearchBoxPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSearchBoxPanelService = TestBed.get(NgxSearchBoxPanelService);
    expect(service).toBeTruthy();
  });
});
