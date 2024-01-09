import { SetStateAction, useState } from "react";

function usePostRequest(
  url: string,
  bodyData: {
    [key: string]: any;
  }
) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postRequest = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      };      

      const response = await fetch(url, options);
      
      const responseData = await response.json();

      setIsLoading(false);
      setResponse(responseData);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.name); // the type of error
        console.log(error.message); // the description of the error
        console.log(error.stack); // the stack trace of the error
      } else {
        // handle other errors
        setIsLoading(false);
        setError(error as SetStateAction<null>);
        setResponse(null);
      }
    }
  };

  return [response, isLoading, error, postRequest];
}

export default usePostRequest;
