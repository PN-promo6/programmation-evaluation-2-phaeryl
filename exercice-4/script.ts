let arrayString: string[] = ["foo", "bar", "bar", "baz", "qux", "quux", "corge", "grault"];
function isSingle (array: string[], stringIsSingle: string): boolean {
    let i: number=0;
    let j: number=0;
    let isSingle: boolean;
    let currentElement: string;
    while (i < array.length) {
        currentElement = array[i];
        
        if (stringIsSingle == currentElement) {
            j++;
        }
        i++;
    }
    if (j > 1) {
        isSingle = false;
    }
    // isSingle = true, even if the string doesn't appear in array.
    else {
        isSingle = true;
    }
    return isSingle;
}
console.log(isSingle(arrayString, "bar"));