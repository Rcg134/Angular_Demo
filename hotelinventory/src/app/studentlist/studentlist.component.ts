import { Component, OnInit } from '@angular/core';
import { StudentList } from '../rooms/student';
import { StudentService } from '../rooms/services/student.service';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'ake-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
})
export class StudentlistComponent implements OnInit {
  studentsList$: Observable<StudentList[]> | undefined;
  studentGetCount$: Observable<number> | undefined;
  Title = 'Student List';

  getStudent$ = this.stdServ.getStudent();

  studentCount$ = this.getStudent$.pipe(map((std) => std.length));

  constructor(private stdServ: StudentService) {}

  ngOnInit(): void {
    this.studentsList$ = this.getStudent$;
    this.studentGetCount$ = this.studentCount$;
  }

  loadStudents(): void {
    // this.stdServ.getStudent().subscribe((student) => {
    //   // this.studentsList = student;
    // });
    this.studentsList$ = this.stdServ
      .getStudent()
      .pipe(switchMap(() => this.getStudent$));

    this.studentGetCount$ = this.studentCount$;
  }

  addStudentEmit() {
    const studentadd: StudentList = {
      surname: 'ako',
      name: 'sya',
      middleName: 'ikaw',
      age: 28,
      subjectId: 2,
    };

    this.stdServ.addStudent(studentadd).subscribe(
      (response) => {
        alert(response.message);
        this.loadStudents();
      },
      (error) => {
        if (error.status === 400) {
          alert(error.error.error);
        } else {
          alert(error.error.error);
        }
      }
    );
  }

  updateStudentEmit() {
    const studentadd: StudentList = {
      surname: 'ako2',
      name: 'sya1',
      middleName: 'ikaw1',
      age: 28,
      subjectId: 2,
    };

    this.stdServ.updateStudent(2, studentadd).subscribe(
      (response) => {
        alert(response.message);
        this.loadStudents();
      },
      (error) => {
        if (error.status === 400) {
          alert(error.error.error);
        } else {
          alert(error.error.error);
        }
      }
    );
  }

  deleteStuednt() {}

  selectStudent(student: StudentList) {
    if (student.id !== undefined) {
      this.stdServ.deleteStudent(student.id).subscribe(
        (response) => {
          alert(response.message);
          this.loadStudents();
        },
        (error) => {
          // Handle the error using the service's error handling logic
          alert(error);
        }
      );
    }
  }
}
