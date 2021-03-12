// stolen from stack overflow probably, don't even know at this point

/**
 * Simple timeout function in async await form
 * 
 * async exampleFunction() {
 *      await delay(500)
 *      // continue on with day
 * }
 * 
 * @param {Int} ms 
 */
const delay = ms => new Promise(res => setTimeout(res, ms));

export default delay