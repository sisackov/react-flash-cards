const LOCAL_STORAGE_DUMMY = 'isMyDataStored';

// Initialize the local storage
export function initStorage() {
    if (!localStorage.getItem(LOCAL_STORAGE_DUMMY)) {
        localStorage.clear();
        saveToLocalStorage(LOCAL_STORAGE_DUMMY, true);
    }
}

export function saveToLocalStorage(key, value, isMap = false) {
    if (isMap) {
        localStorage.setItem(key, JSON.stringify(Array.from(value.entries())));
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export function getFromLocalStorage(key, isMap = false) {
    if (isMap) {
        return new Map(JSON.parse(localStorage.getItem(key)));
    }
    return JSON.parse(localStorage.getItem(key));
}

export function isNumberInRange(number, min, max) {
    return number >= min && number <= max;
}
