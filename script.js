function showPopup() {
    document.querySelector('.popup-overlay').style.display = 'block';
    document.querySelector('.popup').style.display = 'block';
}

function hidePopup() {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.popup-overlay').addEventListener('click', hidePopup);
    document.querySelectorAll('.read-more, .eduact-btn').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            showPopup();
        });
    });
});
