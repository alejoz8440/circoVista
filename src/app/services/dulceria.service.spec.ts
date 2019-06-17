import { TestBed } from '@angular/core/testing';

import { DulceriaService } from './dulceria.service';

describe('DulceriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DulceriaService = TestBed.get(DulceriaService);
    expect(service).toBeTruthy();
  });
});
