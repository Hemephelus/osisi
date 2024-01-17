import React, {useEffect, SetStateAction } from "react";

function useGetRequest(url: string) {
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [data, setData] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<any>(null);

  useEffect(() => {
    // const abortController = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "GET",
          //   headers: {
          //     'Content-Type': 'application/json'
          //   },
          // signal: abortController.signal,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        
        setData(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.name); // the type of error
          console.log(error.message); // the description of the error
          console.log(error.stack); // the stack trace of the error
          setIsLoading(false);
          setError(error);
        } 
      }
    }

    fetchData();

    // return () => {
    //   abortController.abort();
    // };
  }, [url]);
  
  return [data, isLoading, error];
}

export default useGetRequest;
