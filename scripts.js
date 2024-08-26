// scripts.js

// Function to add a comment
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

// Function to filter posts by keywords
function filterPosts() {
    const filter = document.getElementById('keyword-filter').value.toLowerCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const keywords = post.getAttribute('data-keywords').toLowerCase();
        if (keywords.includes(filter)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}
