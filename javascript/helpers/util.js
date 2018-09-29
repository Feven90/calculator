const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = `<h2>${stringToPrint}</h2>`;
};
// export {printToDom(this is what this function to be called): printToDom(this is what it is called here in this file)}; since the key and the value are the same write only one
// exprot default {printToDom: printToDom,
                //    Hello: printHello} // use default 
export{printToDom};