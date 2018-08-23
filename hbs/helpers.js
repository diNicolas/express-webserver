const hbs = require('hbs');
//Helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capital', (text) => {
    let words = text.split('');
    words.forEach((words, idx) => {
        words[idx] = words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
    });

    return words.join('');
});