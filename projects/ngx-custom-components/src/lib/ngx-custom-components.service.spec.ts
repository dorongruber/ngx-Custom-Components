import { TestBed } from '@angular/core/testing';

import { NgxCustomComponentsService } from './ngx-custom-components.service';

describe('NgxCustomComponentsService', () => {
  let service: NgxCustomComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCustomComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
