export function serialize(rawData) {
    let returnData = {};
    for (let [key, value] of rawData) {
        key = key.replace('/', '').trim();
        let selector = document.querySelectorAll(`[name='${key}']`);
        if (selector.length > 1) {
            if (returnData[key] === undefined) {
                returnData[key] = [];
            }
            returnData[key].push(value);
        }
        returnData[key] = value;
    }
    return returnData;
}
