import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { StudentList } from '../student';
import { RoomList } from '../rooms';
import { ResponseService } from './response';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: StudentList[] = [];

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  getStudent() {
    return this.http.get<StudentList[]>('/api/Student/GetStudent');
  }

  addStudent(student: StudentList) {
    return this.http.post<ResponseService>('/api/Student/AddStudent', student);
  }
}
