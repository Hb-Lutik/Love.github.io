document.getElementById('UniquePageButton').addEventListener('click', function() {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.location.href = 'unique.html'; // Replace with the actual URL of the next page
    }, 500);
});