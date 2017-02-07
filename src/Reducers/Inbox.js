const testMessages = {
    34534:{from: "gerigot", body: "hi how's it going? what are you doing?", sent:1486501986319},
    34535:{from: "gerigot", body: "second message", sent:1486501986319},
    34536:{from: "gerigot", body: "find a way", sent:1486501986319},
    34537:{from: "gerigot", body: "primary", sent:1486501986319},
    34538:{from: "gerigot", body: "go go go", sent:1486501986319},
}


const Inbox = (state = {messages: testMessages}, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default Inbox;