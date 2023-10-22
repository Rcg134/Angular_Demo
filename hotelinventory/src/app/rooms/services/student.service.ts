import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { StudentDataList, StudentList } from '../student';
import { RoomList } from '../rooms';
import { ResponseService } from './response';
import { catchError, throwError } from 'rxjs';

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
    return this.http.get<StudentDataList>('/api/Student/GetStudent');
  }

  addStudent(student: StudentList) {
    return this.http.post<ResponseService>('/api/Student/AddStudent', student);
  }

  updateStudent(id: number, student: StudentList) {
    return this.http.put<ResponseService>(
      `/api/Student/UpdateStudent/${id}`,
      student
    );
  }

  deleteStudent(id: number) {
    return this.http.delete<ResponseService>(
      `/api/Student/DeleteStudent/${id}`
    );
  }

  searchStudent(id: number) {
    return this.http.get<StudentList>(`/api/Student/SearchStudent/${id}`);
  }
}
