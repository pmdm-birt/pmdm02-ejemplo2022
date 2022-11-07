import { TestBed } from '@angular/core/testing';

import { GestionPersonasService } from './gestion-personas.service';

describe('GestionPersonasService', () => {
  let service: GestionPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
