
var count = 0;
var output = document.getElementById('output');
function countClicks()

{
count = count + 1;
output.innerHTML = count;
}



imagem.addEventListener('mouseover', () => {
    imagem.style.transform = 'scale(1.1)';
});

imagem.addEventListener('mouseout', () => {
    imagem.style.transform = 'scale(1)';
});



