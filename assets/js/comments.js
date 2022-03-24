//댓글 기능이 추가될 위치
const comment_insert_position = document.getElementById('main');
//포티팅 페이지인지 확인
const post_check = comment_insert_position.getElementsByClassName('page__related').length;
//댓글 속성 설정 함수
function comment_config(theme) {
    const comment = document.createElement('script');
    comment.setAttribute('src', 'https://utteranc.es/client.js');
    comment.setAttribute('repo', 'subslog/blog-comments');
    comment.setAttribute('issue-term', 'pathname');
    comment.setAttribute('theme', theme);
    comment.setAttribute('crossorigin', 'anonymous');
    comment.setAttribute('async', 'true');

    return comment;
}

//포스팅 페이지일 경우
if (post_check == 1) {
    //웹 테마 로드
    const rootstyle = getComputedStyle(root);
    let comments_theme = rootstyle.getPropertyValue('--comments-theme');
    
    //댓글 태그 부모 div
    const comment_parent = document.createElement('div');
    comment_parent.setAttribute('class', 'page__comments');
    comment_parent.setAttribute('id', 'comments');
    comment_parent.innerHTML = "<h4 class='page__comments-title'>댓글남기기</p>";

    //자식으로 추가
    comment_insert_position.appendChild(comment_parent);
    comment_parent.appendChild(comment_config(comments_theme));

    //댓글 태그 부모 div 엘리먼트 획득
    const comment_remove = document.getElementById('comments');

    //테마 변경 토글을 클릭하면
    btn.addEventListener('click', function() {
        //댓글 삭제
        comment_remove.getElementsByTagName('div')[0].remove();
        //현재 테마
        comments_theme = rootstyle.getPropertyValue('--comments-theme');
        //댓글 추가
        comment_parent.appendChild(comment_config(comments_theme));
    });
}