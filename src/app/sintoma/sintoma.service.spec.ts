import { TestBed, inject } from '@angular/core/testing';

import { SintomaService } from './sintoma.service';

describe('SintomaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SintomaService]
    });
  });

  it('should be created', inject([SintomaService], (service: SintomaService) => {
    expect(service).toBeTruthy();
  }));
});
