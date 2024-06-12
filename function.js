function binaryToString(binaryRepresentation, delimiter = "") {
    let str = '';
    let binaryValues;

    if (delimiter) {
        if (delimiter === "\\n") {
            delimiter = "\n";
        } else if (delimiter === "\\t") {
            delimiter = "\t";
        }
        binaryValues = binaryRepresentation.split(delimiter);
    } else {
        binaryValues = binaryRepresentation.match(/.{1,8}/g); // split every 8 characters
    }

    for (let i = 0; i < binaryValues.length; i++) {
        str += String.fromCharCode(parseInt(binaryValues[i], 2));
    }
    return str;
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const binaryRepresentation = binaryToString(element.innerHTML);
        element.innerHTML = binaryRepresentation;
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const binaryRepresentation = binaryToString(element.innerHTML);
        element.innerHTML = binaryRepresentation;
    }
});

*/