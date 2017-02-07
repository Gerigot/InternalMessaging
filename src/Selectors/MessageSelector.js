export const messageObjectToArray = (messages) => {
    return Object.keys(messages).map((key) => {
        return Object.assign({}, messages[key], {id: key});
    });
}