export interface StudentAttributes {
  name: string;
  gender: string;
  age: number;
  address: string;
}

export interface StudentInfo {
  id: number;
  attributes: StudentAttributes;
}

export interface StudentResponse {
  data: StudentInfo[];
  success: boolean;
  message: string | null;
}