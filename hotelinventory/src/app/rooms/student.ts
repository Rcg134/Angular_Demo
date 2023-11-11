export interface StudentList {
  id?: number;
  surname: string;
  name: string;
  middleName: string;
  age: number;
  subjectId: number;
  subjects?: Subject[];
}

export interface Subject {
  id: number;
  subjectName: string;
}

export interface Pages {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalRecords: number;
}

export interface StudentDataList {
  studentDetails?: StudentList[];
  pages: Pages;
}
