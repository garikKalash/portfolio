import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {S3MinioComponent} from './s3-minio.component';

describe('S3MinioComponent', () => {
  let component: S3MinioComponent;
  let fixture: ComponentFixture<S3MinioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [S3MinioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3MinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
