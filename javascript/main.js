import {initialDisplay} from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';
// calculate(4, 2, 'multiply');
const initializeApp = () => {
    buttonEvents();
    initialDisplay();
}
initializeApp();