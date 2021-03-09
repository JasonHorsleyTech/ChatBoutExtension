import { PATH } from '@/constants/api.js'

/**
 * 
 * @param {VuexStore} store 
 * @returns 
 */
export function prependRequestsWithDefaults() {
    return function (request) {
        if (request.url[0] === '/') {
            request.url = PATH + request.url
        }

        return request;
    }
}
