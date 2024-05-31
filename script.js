document.addEventListener('DOMContentLoaded', function () {
    const progressBlock = document.getElementById('progress-block');
    const circle = document.getElementById('circle');
    const valueInput = document.getElementById('value-input');
    const animateToggle = document.getElementById('animate-toggle');
    const hideToggle = document.getElementById('hide-toggle');

    valueInput.addEventListener('input', function () {
        const value = valueInput.value;
        const dashArray = `${value}, 100`;
        circle.setAttribute('stroke-dasharray', dashArray);
    });

    animateToggle.addEventListener('change', function () {
        if (animateToggle.checked) {
            progressBlock.classList.add('animated');
        } else {
            progressBlock.classList.remove('animated');
        }
    });

    hideToggle.addEventListener('change', function () {
        if (hideToggle.checked) {
            progressBlock.classList.add('hidden');
        } else {
            progressBlock.classList.remove('hidden');
        }
    });
});

document.getElementById('value-input').addEventListener('change', function() {
    var input = this;
    var value = parseInt(input.value, 10);

    if (value < 0) {
        input.value = 0;
    } else if (value > 100) {
        input.value = 100;
    }
});