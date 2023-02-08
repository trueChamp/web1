const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    duplicateItemsAllowed: false

});



document.getElementById('select').onclick = function() {
    document.querySelector('choices__inner').classList.add('ff');
}