import { useEffect, useState } from "react";
import api from '../services/api-client'
import FetchDataResponse from "../model/fetch-data-response";
import { AxiosError, AxiosRequestConfig } from "axios";

export default function useData<T>(endpoint: string, config?: AxiosRequestConfig, deps?: any[]): {data: T[] , error: string, isLoading: boolean} {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        setIsLoading(true);
    api.get<FetchDataResponse<T>>(endpoint, config)
    .then(res => setData(res.data.results))
    .catch((e:AxiosError) => {
        setError(e.message)
    }).finally(() => setIsLoading(false)) 
    }, deps || []);
    return {data, error, isLoading};
}
