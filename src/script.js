const hover = document.getElementById('card-wrapper1');
const icon = document.getElementById('icon1');

hover.addEventListener('mouseover', () => {
    icon.classList.add('on');
});

hover.addEventListener('mouseout', () => {
    icon.classList.remove('on');
});

const hover2 = document.getElementById('card-wrapper2');
const icon2 = document.getElementById('icon2');

hover2.addEventListener('mouseover', () => {
    icon2.classList.add('on');
});

hover2.addEventListener('mouseout', () => {
    icon2.classList.remove('on');
});

const hover3 = document.getElementById('card-wrapper3');
const icon3 = document.getElementById('icon3');

hover3.addEventListener('mouseover', () => {
    icon3.classList.add('on');
});

hover3.addEventListener('mouseout', () => {
    icon3.classList.remove('on');
});
