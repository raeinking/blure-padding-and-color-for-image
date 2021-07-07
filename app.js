const input = document.querySelectorAll("input");

function changeValue() {
    const addPX = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + addPX);
};

input.forEach(input => input.addEventListener('click', changeValue));
input.forEach(input => input.addEventListener('mousemove', changeValue));
input.forEach(input => input.addEventListener('mouseleave', changeValue));
input.forEach(input => input.addEventListener('load', changeValue));