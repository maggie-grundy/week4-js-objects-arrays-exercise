// Based state of my app
// A constructor function to create a state object
function State(newForm) {
    this.formState = newForm; 
}

const state = new State({}); 

console.log(state);

const appState = {};

//1: Get form HTML element
const mainForm = document.getElementById("mainForm");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');

function saveForm(event) {
    //Stop default event (form submission)
    event.preventDefault();

    //Update app state
    appState.name = nameInput.value;
    appState.email = emailInput.value;

    console.log(appState);

    //Store state in the State object
    state.formState = appState;

    console.log(state);

    //Reset form
    mainForm.reset();
}

//2: Track submission of form (anonymous function)
mainForm.addEventListener('submit', (event) => saveForm(event));
