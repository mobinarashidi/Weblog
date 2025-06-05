// render <Post> tags as div elements
document.addEventListener("DOMContentLoaded", () => {
    const postsSection = document.getElementById("posts-section");

    // Get all <Post> elements
    const postElements = document.querySelectorAll("Post");

    // Convert <Post>
    postElements.forEach(postElement => {
        // Extract title and content from <Post> tag
        const title = postElement.getAttribute("title");
        const content = postElement.innerHTML;

        // Create new div for the post
        const postDiv = document.createElement("div");
        postDiv.classList.add("post-container");

        // Add title and text to div tags
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("post-title");
        titleDiv.innerText = title;

        const textDiv = document.createElement("div");
        textDiv.classList.add("post-text");
        textDiv.innerHTML = content;

        // Append title and text to post container
        postDiv.appendChild(titleDiv);
        postDiv.appendChild(textDiv);

        // Append the postDiv to posts-section
        postsSection.appendChild(postDiv);

        // Remove original <Post> tag
        postElement.remove();
    });
});
