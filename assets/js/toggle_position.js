const footer = document.getElementById('footer');
const theme_toggle = document.getElementById('theme_toggle_id');
//뷰포트 높이
let viewport_height = window.innerHeight;
//뷰포트 상단부터 footer 까지의 길이
let footer_top = footer.getBoundingClientRect().top;

//초기 설정
if(viewport_height >= footer_top) {
    theme_toggle.classList.add('abs');
}
else {
    theme_toggle.classList.remove('abs');
}

window.addEventListener('scroll', function() {
    viewport_height = window.innerHeight;
    footer_top = footer.getBoundingClientRect().top;

    //뷰포트에 footer가 보이면
    if(viewport_height >= footer_top) {
        theme_toggle.classList.add('abs');
    }
    else {
        theme_toggle.classList.remove('abs');
    }
});