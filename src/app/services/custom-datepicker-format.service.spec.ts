import { TestBed } from '@angular/core/testing';

import { CustomDatepickerFormatService } from './custom-datepicker-format.service';

describe('CustomDatepickerFormatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomDatepickerFormatService = TestBed.get(CustomDatepickerFormatService);
    expect(service).toBeTruthy();
  });
});
