document.getElementById('nextPageButton').addEventListener('click', function() {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.location.href = 'memories.html';
    }, 500);
});
