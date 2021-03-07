import { PATH } from '@/constants/api.js'

export function prependRequestsWithDefaults() {
    return function (request) {
        if (request.url[0] === '/') {
            request.url = PATH + request.url
        }

        return request;
    }
}
