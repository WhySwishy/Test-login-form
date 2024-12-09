
const input = document.querySelectorAll('input')
const submitbtn = document.getElementById('submit')


// Function to check if all inputs have green borders
function allInputsValid() {
    return Array.from(input).every(input => 
        getComputedStyle(input).borderColor === 'rgb(0, 128, 0)' // Check if border is green
    );
}

// Event listener for button click
submitbtn.addEventListener('click', () => {
    if (allInputsValid()) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
   }
});
