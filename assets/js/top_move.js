const top_move_btn = document.getElementById('top_move_Btn');

top_move_btn.addEventListener('click', function() {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});