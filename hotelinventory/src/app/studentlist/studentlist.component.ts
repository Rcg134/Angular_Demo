import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentDataList, StudentList } from '../rooms/student';
import { StudentService } from '../rooms/services/student.service';
import { Observable, Subscription, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GenDialogComponent } from '../dialog/gen-dialog/gen-dialog.component';

@Component({
  selector: 'ake-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
})
export class StudentlistComponent implements OnInit, OnDestroy {
  studentsList$: Observable<StudentDataList> | undefined;
  Title = 'Student List';
  private subscriptions: Subscription[] = [];
  getStudent$ = this.stdServ.getStudent();

  constructor(private stdServ: StudentService, public dialog: MatDialog) {
    // this.getStudent$ = timer(1000) // Delay for 1 second
    //   .pipe(
    //     switchMap(() => {
    //       return this.stdServ.getStudent();
    //     }),
    //     first()
    //   );
  }

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

    const subscriptionAdd = this.stdServ
      .addStudent(studentadd)
      .subscribe((response) => {
        this.loadStudents();
      });

    this.subscriptions.push(subscriptionAdd);
  }

  isDelete(student: StudentList) {
    const dialogRef = this.dialog.open(GenDialogComponent, {
      data: {
        btnok: 'Yes',
        btncancel: 'No',
        content: 'Are you sure you wanna delete this data?',
        dialogtitle: 'Delete',
        bgcolor: 'bgred',
      },
    });

    const subscriptionDelete = dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        if (student.id !== undefined) {
          this.stdServ.deleteStudent(student.id).subscribe((response) => {
            this.loadStudents();
          });
        }
      }
    });
    this.subscriptions.push(subscriptionDelete);
  }

  selectStudent(student: StudentList) {
    if (student.id !== undefined) {
      this.stdServ.deleteStudent(student.id).subscribe((response) => {
        alert(response.message);
        this.loadStudents();
      });
    }
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions in the ngOnDestroy hook
    this.subscriptions.forEach((subscription) => {
      console.log(subscription);
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }
}
