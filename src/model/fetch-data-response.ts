export default interface FetchDataResponse<T> {
    count: number;
    results: T[];
}