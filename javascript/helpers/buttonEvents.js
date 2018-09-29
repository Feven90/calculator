import {addNumber, calculate,setMathType} from '../components/calculator.js';

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const divideButton = document.getElementById('divideButton');
const equalsbutton = document.getElementById('equalButton');
const plusButton = document.getElementById("nineButton");


// const sevenButtonEvent = () => {
//     sevenButton.addEventListener('click',(e) => {
//       addNumber(e.target.innerHTML);
//     })
// };
// const eightButtonEvent = () => {
//     eightButton.addEventListener('click',(e) => {
//    addNumber(e.target.innerHTML);
//     })
// }

const addNumberCaller = (e) => {
addNumber(e.target.innerHTML);
};

const equalsButtonEvent = () => {
    equalsbutton.addEventListener('click', calculate)
}
const divideButtonEvent = () => {
    divideButton.addEventListener('click',() => {
        setMathType('divide');
    })
}
const plusButtonEvent = () => {
    plusButton.addEventListener('click',() => {
        setMathType('plus');
    })
}
const sevenButtonEvent = () => {
        sevenButton.addEventListener('click',addNumberCaller);
};
const eightButtonEvent = () => {
        eightButton.addEventListener('click',addNumberCaller);
};

const nineButtonEvent = () => {
    nineButton.addEventListener('click',addNumberCaller);
};
const attachEvents = () => {
sevenButtonEvent();
eightButtonEvent();
nineButtonEvent();
divideButtonEvent();
equalsButtonEvent();
}
export default attachEvents;
