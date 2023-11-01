import { StudentList } from '../student';

export interface ResponseService {
  message: string;
  error: string;
  token: string;
  userProfile: StudentList;
}
