import { TestBed } from '@angular/core/testing';

import { BizAccountService } from './biz-account.service';

describe('BizAccountService', () => {
  let service: BizAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BizAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
