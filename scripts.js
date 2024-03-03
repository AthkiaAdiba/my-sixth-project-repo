

const fetchAllPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    const allPosts = data.posts;
    // console.log(allPosts);

    const postsContainer = document.getElementById('card-container');

    allPosts.forEach(post => {
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <div class="flex gap-2 bg-[#797dfc1a] p-10 rounded-3xl">
                        <!-- Avter div -->
                        <div>
                            <div class="avatar online">
                                <div class="w-24 rounded-full">
                                    <img src="${post.image}" />
                                </div>
                            </div>
                        </div>
                        <!-- Text div -->
                        <div class="font-inter space-y-6">
                            <div class="flex items-center gap-5 font-medium text-[#12132dcc]">
                                <p># <span>${post.category}</span></p>
                                <p>Author : <span>${post.author.name}</span></p>
                            </div>
                            <h3 class="font-mulish text-[#12132D] font-bold text-xl">${post.title}</h3>
                            <p class="text-base text-[#12132D]">${post.description
                            }</p>
                            <img class="w-full" src="images/Line 1 (3).png" alt="">
                            <!-- icon div -->
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-8">
                                    <div class="flex items-center gap-3 text-base text-[#12132D]">
                                        <img src="images/comment.png" alt="">
                                        <p>${post.comment_count}</p>
                                    </div>
                                    <div class="flex items-center gap-3 text-base text-[#12132D]">
                                        <img src="images/eye.png" alt="">
                                        <p>${post.view_count}</p>
                                    </div>
                                    <div class="flex items-center gap-3 text-base text-[#12132D]">
                                        <img src="images/time.png" alt="">
                                        <p><span>${post.posted_time}</span>min</p>
                                    </div>
                                </div>
                                <div>
                                    <button><img src="images/inbox.png" alt=""></button>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        postsContainer.appendChild(postDiv);
    });
}


fetchAllPosts();