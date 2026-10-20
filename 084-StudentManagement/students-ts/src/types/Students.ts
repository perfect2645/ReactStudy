export type StudentInfo = {
    id : number,
    attributes : StudentAttribute
}

export type StudentAttribute = {
    name: string,
    age: number,
    gender: string,
    address: string | null
}

export type StudentResponse = {
    data: StudentInfo[],
    success: boolean,
    message: string | null
}

export type StudentState = {
  students: StudentInfo[];
  loading: String;
  error: any;
};

export type StudentAction =
  | { type: "StartLoading" }
  | { type: "Deleting"; payload: string }
  | { type: "Loaded"; payload: StudentInfo[] }
  | { type: "Error"; payload: string };