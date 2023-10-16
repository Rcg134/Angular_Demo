import { Component, OnInit } from '@angular/core';
import { StudentDataList, StudentList } from '../rooms/student';
import { StudentService } from '../rooms/services/student.service';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'ake-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
})
export class StudentlistComponent implements OnInit {
  studentsList$: Observable<StudentDataList> | undefined;
  Title = 'Student List';

  getStudent$ = this.stdServ.getStudent();

  constructor(private stdServ: StudentService) {}

  ngOnInit(): void {
    this.studentsList$ = this.getStudent$;
  }

  loadStudents(): void {
    // this.stdServ.getStudent().subscribe((student) => {
    //   // this.studentsList = student;
    // });
    // switch map is use to remove the recent subscription and change it to a new one
    this.studentsList$ = this.stdServ
      .getStudent()
      .pipe(switchMap(() => this.getStudent$));
  }

  addStudentEmit() {
    const studentadd: StudentList = {
      surname: 'ako',
      name: 'sya',
      middleName: 'ikaw',
      age: 28,
      subjectId: 2,
    };

    this.stdServ.addStudent(studentadd).subscribe((response) => {
      alert(response.message);
      this.loadStudents();
    });
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
        alert(error.error.error);
      }
    );
  }

  deleteStuednt() {}

  selectStudent(student: StudentList) {
    if (student.id !== undefined) {
      this.stdServ.deleteStudent(student.id).subscribe((response) => {
        alert(response.message);
        this.loadStudents();
      });
    }
  }
}
