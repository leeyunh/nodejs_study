//import { odd, even } from './var'; // ES2015 모듈 스타일
const { odd, even } = require('./var');

function checkOddOrEven(num){
    if(num % 2){
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;
//export default checkOddOrEven; //ES2015 모듈 스타일