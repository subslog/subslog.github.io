const btn = document.getElementById('toggleBtn');
// :root 가상 사용자 속성 엘리먼트 획득 
const root = document.querySelector(':root');
// OS가 다크 모드인지 확인
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
// 로컬 스토리지
const currentTheme = localStorage.getItem('theme');
// fab 클래스 획득
const toggle_font = document.getElementById('toggle_font');

// 로컬스토리지 색상 체크
if (currentTheme == 'dark') {
    toggle_font.classList.add('fa-sun');
    root.classList.toggle('dark-theme');
}
else if (currentTheme == 'light') {
    toggle_font.classList.add('fa-moon');
    root.classList.toggle('light-theme');
}

// 초기 설정
if ( !(toggle_font.classList.contains('fa-sun') || toggle_font.classList.contains('fa-moon')) ) {
    // OS가 다크 모드이면
    if (prefersDarkScheme.matches) {
    // 다크 모드 버튼 설정
        toggle_font.classList.add('fa-sun');
    }
    else {
        toggle_font.classList.add('fa-moon');
    }
}

btn.addEventListener('click', function() {
    // OS가 다크 모드이면
    if (prefersDarkScheme.matches) {
        // 라이트 모드로 전환
        root.classList.toggle('light-theme');
        let theme = root.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        //테마가 라이트 모드이면
        if ( theme == 'light' ) {
            toggle_font.classList.replace('fa-sun', 'fa-moon');
        }
        else {
            toggle_font.classList.replace('fa-moon', 'fa-sun');
        }
    }
    else {
        root.classList.toggle('dark-theme');
        let theme = root.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        //테마가 다크 모드이면
        if ( theme == 'dark' ) {
            toggle_font.classList.replace('fa-moon', 'fa-sun');
        }
        else {
            toggle_font.classList.replace('fa-sun', 'fa-moon');
        }
    }
    //포커스 해제
    setTimeout(() => btn.blur(), 500);
});