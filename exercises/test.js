/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */

const data = [{login: 'login1'}, {login: 'login2'}];
const getLoginList = (data) => {
 // Your code goes here...
 return data.map((item) => item.login)
}

getLoginList(data);