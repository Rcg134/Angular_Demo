import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, pipe, Subscription } from 'rxjs';
import { StudentService } from 'src/app/rooms/services/student.service';
import { StudentList, Subject } from 'src/app/rooms/student';
@Component({
  selector: 'ake-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.scss'],
})
export class StudentUpdateComponent implements OnInit, OnDestroy {
  stundentUpdateForm!: FormGroup;
  SubjectList$: Observable<Subject[]> | undefined;
  studentId?: number;
  private subscription: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private srv: StudentService,
    private route: Router,
    private params: ActivatedRoute
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

    const subscriptionGetId = this.params.params.subscribe((iparams) => {
      this.studentId = iparams['id'];
      if (this.studentId) {
        this.srv.searchStudent(this.studentId).subscribe((value) => {
          this.stundentUpdateForm.setValue({
            surname: value.surname,
            middlename: value.middleName,
            name: value.name,
            age: value.age,
            subjectid: value.subjectId,
          });
        });
      }
    });

    this.subscription.push(subscriptionGetId);
  }

  SubmitUpdate() {
    if (this.studentId) {
      const updatedData = this.stundentUpdateForm.value;
      this.srv.updateStudent(this.studentId, updatedData).subscribe(
        (res) => {
          if (res.message) {
            this.route.navigate(['Student']);
          }
        },
        (error) => {
          console.error('HTTP Request Error:', error.error.error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }
}
