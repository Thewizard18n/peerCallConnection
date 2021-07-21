import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDataComponent } from './media-data.component';

describe('MediaDataComponent', () => {
  let component: MediaDataComponent;
  let fixture: ComponentFixture<MediaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
