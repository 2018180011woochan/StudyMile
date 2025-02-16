/**
 * 
 */
window.onload = function() {
    var heartMessageElement = document.getElementById("heartMessage");
    if (heartMessageElement) {
        alert(heartMessageElement.textContent);
    }
};

// 알림 문구는 후에 상수로 바꾸기!!!
function heartLoginAlert() {
    if (confirm("추천은 로그인 후에 가능합니다. 로그인 페이지로 이동하시겠습니까?")) {
        window.location.href = '/login';
    }
}

function DoubleHeartAlert() {
    alert("게시물당 추천은 1인 1회 가능합니다");
}

function deleteAlert(commentId, postId) {
    // 삭제 확인 창
    if (confirm("정말 삭제하시겠습니까?")) {
        // 확인 시 숨겨진 폼을 찾아 제출
        var form = document.getElementById('deleteForm-' + commentId);
        if (form) {
            form.submit();
        }
    }
}

function deletePostAlert(postId) {
    // 게시물 삭제 확인 창
    if (confirm("정말 게시물을 삭제하시겠습니까?")) {
        // 확인 시 게시물 삭제 폼 제출
        var form = document.getElementById('deletePostForm');
        if (form) {
            form.submit();
        }
    }
}