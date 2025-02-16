/**
 * 
 */
// 댓글 수정 활성화
function enableEdit(commentId) {
	console.log(commentId);
	const contentElement = document.querySelector(`#content-${commentId}`);
	const editFormElement = document.querySelector(`#edit-form-${commentId}`);

	console.log(contentElement, editFormElement);
	
	
    if (contentElement && editFormElement) {
        // 댓글 내용 숨기기
        contentElement.style.display = "none";
        // 수정 폼 보이기
        editFormElement.style.display = "block";
    } else {
        console.warn("해당 ID에 대한 요소를 찾을 수 없습니다:", commentId);
    }
}

// 수정 취소
function cancelEdit(commentId) {
    // 수정 폼 숨기기
    document.querySelector(`#content-${commentId}`).style.display = "block"; // 댓글 내용 보이기
    document.querySelector(`#edit-form-${commentId}`).style.display = "none"; // 수정 폼 숨기기
}

function submitHeartForm(commentId) {
    // 숨겨진 폼을 찾아 제출
    var form = document.getElementById('heartForm-' + commentId);
    if (form) {
        form.submit();
    }
}