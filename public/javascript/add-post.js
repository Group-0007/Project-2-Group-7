async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
function showNewPost() {
    const newPostForm = document.querySelector("#create-new-post");
    newPostForm.style.display = "block";
    const newPostBtn = document.querySelector("#new-post-btn");
    newPostBtn.style.display = "none";
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
document.querySelector('#new-post-btn').addEventListener('click', showNewPost);