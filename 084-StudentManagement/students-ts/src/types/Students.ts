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