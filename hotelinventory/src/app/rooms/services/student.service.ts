import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { StudentDataList, StudentList, Subject } from '../student';
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

  getStudent(currentPage: number) {
    return this.http.get<StudentDataList>(
      `/api/Student/GetStudent/${currentPage}`
    );
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

  searchStudentData(searchData: string, currentPage: number) {
    return this.http.get<StudentDataList>(
      `/api/Student/SearchStudentData/${searchData}/${currentPage}`
    );
  }

  getCategory() {
    return this.http.get<Subject[]>('/api/Student/GetSubject');
  }
}
