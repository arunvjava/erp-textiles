export interface Response<T> {
    status: number;
    respObj: T;
    message: string;
}