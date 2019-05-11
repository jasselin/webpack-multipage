import { find } from 'lodash';
import users from './users';
import "./common";

const adam = find(users, { firstName: 'Adam' });
console.log("a.js", adam);

export default {
    test: () => {
        console.log('Module A - test()');
    }
}