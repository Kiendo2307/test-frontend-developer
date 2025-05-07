
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useFetchData = (url: string) => {
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);
    return { data, error, isLoading, mutate };
};

export default useFetchData;
