import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map, switchMap, tap } from 'rxjs';
import { StudentService } from 'src/app/rooms/services/student.service';
import { StudentDataList, StudentList } from 'src/app/rooms/student';

@Component({
  selector: 'ake-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.scss'],
})
export class StudentInformationComponent implements OnInit {
  ids!: number;
  studentinfo$: Observable<StudentList> | undefined;
  constructor(private router: ActivatedRoute, private srv: StudentService) {}

  ngOnInit(): void {
    // to avoid subscribe always use rxjs approach
    this.studentinfo$ = this.router.params.pipe(
      switchMap((params) => this.srv.searchStudent(params['id']))
    );

    // this.router.params.subscribe((params) => {
    //   this.ids = params['id'];
    //   console.log(this.studentinfo$);
    // });
  }
}
