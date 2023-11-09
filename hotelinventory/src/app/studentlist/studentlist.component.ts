import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentDataList, StudentList } from '../rooms/student';
import { StudentService } from '../rooms/services/student.service';
import { Observable, Subscription, of, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GenDialogComponent } from '../dialog/gen-dialog/gen-dialog.component';
import { PaginationService } from '../rooms/services/paginationService/pagination.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'ake-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
})
export class StudentlistComponent
  extends PaginationService
  implements OnInit, OnDestroy
{
  studentsList$: Observable<StudentDataList> | undefined;
  Title = 'Student List';
  private subscriptions: Subscription[] = [];
  getStudent$ = this.stdServ.getStudent(1);
  pageEvent: PageEvent = new PageEvent();

  //table set up
  // displayedColumns: string[] = ['Actions', 'Index', 'Name', 'Age', 'Subjects'];

  constructor(private stdServ: StudentService, public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    // this.getStudent$.subscribe((data) => {
    //   this.setPaginationSize(
    //     data.pages.currentPage,
    //     data.pages.pageSize,
    //     data.pages.totalPages,
    //     data.pages.totalRecords
    //   );
    // });

    this.studentsList$ = this.getStudent$;
  }

  loadStudents(): void {
    // this.stdServ.getStudent().subscribe((student) => {
    //   // this.studentsList = student;
    // });
    // switch map is use to remove the recent subscription and change it to a new one
    this.studentsList$ = this.stdServ
      .getStudent(1)
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

  updateData(event: PageEvent) {
    const currentindex = event.pageIndex + 1;
    this.stdServ.getStudent(currentindex).subscribe((data) => {
      this.studentsList$ = of(data);
    });
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
