//listen to the click event on the get-jokes button

//select the button, add the event listener

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event){
    console.log("button clicked");

    event.preventDefault();
}
