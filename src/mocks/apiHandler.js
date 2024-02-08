import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'
import dommy from "../../public/data/dummy.json"

// Describe the network.
const handler = [
  http.get('/blog/posts', () => {
    return HttpResponse.json(dommy)
  }),
]
 
// Enable API mocking anywhere.
export const apiWorker = setupWorker(...handler)
