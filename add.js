const input = document.querySelector('input');
const val = document.getElementById('values');
input.addEventListener('input', show);


function show(x) {

    val.innerHTML = x.target.value;
}