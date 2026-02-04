import { TestBed } from '@angular/core/testing';
import { Userservice } from './userservice';

describe('Userservice', () => {

  let service: Userservice;

  beforeEach( ()=> {

      TestBed.configureTestingModule({ })
      service = TestBed.inject(Userservice) // injected
  })

  it('TEST: should be created', ()=> {
    expect(service).toBeTruthy()
  })

  it('TEST: should get users', ()=> {
    service.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0)
    })
  })

});
