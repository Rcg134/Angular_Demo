import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/rooms/services/student.service';
import { StudentList, Subject } from 'src/app/rooms/student';
@Component({
  selector: 'ake-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.scss'],
})
export class StudentUpdateComponent implements OnInit {
  stundentUpdateForm!: FormGroup;
  SubjectList$: Observable<Subject[]> | undefined;

  constructor(
    private fb: FormBuilder,
    private srv: StudentService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.SubjectList$ = this.srv.getCategory();

    this.stundentUpdateForm = this.fb.group({
      surname: [''],
      middlename: [''],
      name: [''],
      age: [''],
      subjectid: [''],
    });
  }
}
