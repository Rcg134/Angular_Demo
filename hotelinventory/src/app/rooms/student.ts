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

export interface StudentDataList {
  count: number;
  studentDetails?: StudentList[];
}
