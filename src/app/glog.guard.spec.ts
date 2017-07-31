import { TestBed, async, inject } from '@angular/core/testing';

import { GlogGuard } from './glog.guard';

describe('GlogGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlogGuard]
    });
  });

  it('should ...', inject([GlogGuard], (guard: GlogGuard) => {
    expect(guard).toBeTruthy();
  }));
});
