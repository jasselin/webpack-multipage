import { find } from 'lodash';
import users from './users';
import "./common";
 
const lucy = find(users, { firstName: 'Lucy' });
console.log("b.js", lucy);

export default {
    test: () => {
        console.log('Module B - test()');
    }
}