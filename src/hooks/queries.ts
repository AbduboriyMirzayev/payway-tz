import axios from "axios";
import { useCallback, useState } from "react";

type QueryProps = {
  suffix?: string;
  data: any;
  method?: string;
};

type ResponseType = {
  message: string;
  status: boolean;
};

type QueryResponseType = [
  (args: QueryProps) => void,
  {
    data: ResponseType | null;
    error: ResponseType | null;
    isLoading: boolean;
  }
];

function useQuery(): QueryResponseType {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ResponseType | null>(null);
  const [data, setData] = useState<ResponseType | null>(null);

  const toggleLoading = useCallback(() => setIsLoading((prev) => !prev), []);

  const onSendRequest = ({
    data: body,
    method = "get",
    suffix = "",
  }: QueryProps) => {
    toggleLoading();
    axios({
      method,
      url: process.env.REACT_APP_BACKEND_URL + suffix,
      data: body,
    }).then((res) => {
      if (res.data.success) {
        setError(null);
        setData(res.data);
      } else {
        setData(null);
        setError(res.data);
      }
      toggleLoading();
    });
  };

  return [onSendRequest, { data, isLoading, error }];
}

export default useQuery;
