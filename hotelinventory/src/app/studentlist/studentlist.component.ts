import { Component, OnInit } from '@angular/core';
import { StudentList } from '../rooms/student';
import { StudentService } from '../rooms/services/student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ake-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
})
export class StudentlistComponent implements OnInit {
  studentsList: StudentList[] = [];

  Title = 'Student List';

  constructor(private stdServ: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.stdServ.getStudent().subscribe((student) => {
      this.studentsList = student;
    });
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

  selectStudent(student: StudentList) {
    alert(student.id);
  }
}
