import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/rooms/services/student.service';
import { StudentList, Subject } from 'src/app/rooms/student';

@Component({
  selector: 'ake-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss'],
})
export class StudentCreateComponent implements OnInit {
  SubjectList$: Observable<Subject[]> | undefined;

  SuccessMessage: string | undefined;

  //model for forms that need to connect to Forms in HTML
  //Note  it is connected in name attributes
  studentModel: StudentList = {
    surname: '',
    name: '',
    middleName: '',
    age: 0,
    subjectId: 0,
  };

  constructor(private srv: StudentService, private route: Router) {}

  ngOnInit(): void {
    this.SubjectList$ = this.srv.getCategory();
  }

  addStudent(studentForm: NgForm) {
    this.srv.addStudent(this.studentModel).subscribe((data) => {
      this.SuccessMessage = 'Successfully Enrolled';
      studentForm.resetForm({
        surname: '',
        name: '',
        middleName: '',
        age: 0,
        subjectId: 0,
      });
      //use to redirect programmatically
      this.route.navigate(['Student']);
    });
  }
}
