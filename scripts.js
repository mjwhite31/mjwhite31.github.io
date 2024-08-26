// scripts.js

function addComment(button) {
    const commentText = button.previousElementSibling.value;
    const commentSection = button.parentElement.querySelector('.comments');
    
    if (commentText.trim() !== '') {
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentSection.appendChild(newComment);
        button.previousElementSibling.value = '';
    }
}
