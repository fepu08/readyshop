import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface ApiErrorResponse {
  message?: string;
  // Add other properties that might be in your API's error response
}

function isApiErrorResponse(object: unknown): object is ApiErrorResponse {
  return typeof object === 'object' && object !== null && 'message' in object;
}

export default function getErrorMessageFromRTKQueryError(error: FetchBaseQueryError | SerializedError): string {
  let errorMessage = 'An error occurred';

  if (typeof error === 'object' && 'status' in error) {
    // Assuming error is of type FetchBaseQueryError
    const fetchError = error as FetchBaseQueryError;
    if (fetchError.data && isApiErrorResponse(fetchError.data)) {
      errorMessage = fetchError.data.message || errorMessage;
    }
  } else if (typeof error === 'object' && 'message' in error) {
    // Handling generic error object
    errorMessage = error.message || errorMessage;
  }

  return errorMessage;
}
