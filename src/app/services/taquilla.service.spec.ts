import { TestBed } from '@angular/core/testing';

import { TaquillaService } from './taquilla.service';

describe('TaquillaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaquillaService = TestBed.get(TaquillaService);
    expect(service).toBeTruthy();
  });
});
