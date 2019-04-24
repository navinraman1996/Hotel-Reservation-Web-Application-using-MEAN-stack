import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

/**mponents shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data
 * . They should focus on presenting data and delegate data access to a service.
 */

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
