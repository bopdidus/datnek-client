import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCmpComponent } from './main-cmp.component';

describe('MainCmpComponent', () => {
  let component: MainCmpComponent;
  let fixture: ComponentFixture<MainCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form shoulb be invalid', async()=>{
      component.formLang.controls['choice'].setValue('');
      component.formLang.controls['speak'].setValue('');
      component.formLang.controls['write'].setValue('');
      component.formLang.controls['comp'].setValue('');
      expect(component.formLang.valid).toBeFalsy();
  });

  it('form shoulb be valid', async()=>{
    component.formLang.controls['choice'].setValue('English');
    component.formLang.controls['speak'].setValue('Intermediate');
    component.formLang.controls['write'].setValue('Normal');
    component.formLang.controls['comp'].setValue('Normal');
    expect(component.formLang.valid).toBeTruthy();
});

});
