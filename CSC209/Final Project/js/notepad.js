/**
 * Applies relevent function for all formatting options in note app.
 * Uses deprecated function execCommand, but seems to work fine.
 */

const elements = document.querySelectorAll(".btn");

elements.forEach(element => {
    element.addEventListener('click', ()=> {
        let command = element.dataset['element'];
        document.execCommand(command, false, null);
    })
})