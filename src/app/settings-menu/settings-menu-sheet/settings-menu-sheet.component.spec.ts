import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMenuSheetComponent } from './settings-menu-sheet.component';

describe('SettingsMenuSheetComponent', () => {
  let component: SettingsMenuSheetComponent;
  let fixture: ComponentFixture<SettingsMenuSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsMenuSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMenuSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
