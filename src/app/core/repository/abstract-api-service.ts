import { HttpHeaders, HttpResponse } from '@angular/common/http';

/**
 * Standard headers that are used on requests to backend APIs
 */
const basicHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

/**
 * Implements basic standard functionality common to any API service that makes requests to a Backend API
 */
export abstract class AbstractApiService {

  protected getStandardOptions(
    additionalParams?: {
      [key: string]: string
    }
  ): {headers: HttpHeaders} {
    const allHeaders = additionalParams ? {
      ...basicHeaders,
      ...additionalParams
    } : {
      ...basicHeaders
    }
    return {
      headers: new HttpHeaders(allHeaders)
    }
  }

}
