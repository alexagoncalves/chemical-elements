export const getElementsToDisplay = (elementsInDisplay, elementsData) => {
    let displayArray = [];
    for ( let element of elementsInDisplay ) {
        displayArray.push(elementsData.find( elem => elem.atomicNumber === element));
    }
    return displayArray; 
}

export const slugify = (text) => {
    return text
      .toString()                           // Cast to string (optional)
      .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
      .toLowerCase()                  // Convert the string to lowercase letters
      .trim()                                  // Remove whitespace from both sides of a string (optional)
      .replace(/\s+/g, '-')            // Replace spaces with -
      .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
      .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}

export const scrollUp = (elementsDisplay) => {
    
    let newArrayElements = [];
    for (let element of elementsDisplay) {
        if (element === 118) {
            element = 0
        }
        element++;
        newArrayElements.push(element)
    }
    
    return newArrayElements;
}

export const scrollDown = (elementsDisplay) => {
    
    let newArrayElements = [];
    for (let element of elementsDisplay) {
        if (element === 1) {
            element = 119
        }
        element--;
        newArrayElements.push(element)
    }
    
    return newArrayElements;
}