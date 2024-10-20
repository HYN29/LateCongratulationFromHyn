// Handle the first "Open" button click to show the congratulation message
document.getElementById('openButton').addEventListener('click', function() {
    document.getElementById('greetingCard').style.display = 'none';
    document.getElementById('congratsMessage').style.display = 'block';
});

// Handle the second "Next" button click to show the funny message
document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('congratsMessage').style.display = 'none';
    document.getElementById('funnyMessage').style.display = 'block';
});

// Handle the "Close" button click to close the webpage
document.getElementById('closeButton').addEventListener('click', function() {
    window.close(); // This will try to close the tab
    // In case window.close() doesn't work, redirect to a thank-you page or alert a message
    alert("Vân Cutiee một đêm ấm áp! 20/10/2024");
});