
let isActive = false;

const fetchAllPosts = async (searchText) => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    const allPosts = data.posts;


    // console.log(allPosts);

    const postsContainer = document.getElementById('card-container');

    postsContainer.innerHTML = ''
    allPosts.forEach(post => {
        // console.log(post);
        const postDiv = document.createElement('div');

        postDiv.innerHTML = `
        <div class="lg:w-[900px] flex flex-col lg:flex-row gap-2 bg-[#797dfc1a] p-3 lg:p-10 rounded-3xl">
                        <!-- Avter div -->
                        <div>
                        <div class="relative mt-5">
                        <img class="w-[100px] h-[100px] rounded-full" src="${post.image}" />
                        <div class="absolute top-2 left-[78px] h-[15px] w-[15px] rounded-full ${post.isActive ? "bg-green-700" : "bg-red-700"}"></div>
                    </div>
                        </div>
                        <!-- Text div -->
                        <div class="font-inter space-y-6">
                            <div class="flex items-center gap-2 lg:gap-5 font-medium text-[#12132dcc]">
                                <p># <span>${post.category}</span></p>
                                <p>Author : <span>${post.author.name}</span></p>
                            </div>
                            <h3 class="font-mulish text-[#12132D] font-bold text-xl">${post.title}</h3>
                            <p class="text-base text-[#12132D]">${post.description}</p>
                            <img class="w-full" src="images/Line 1 (3).png" alt="">
                            <!-- icon div -->
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-2 lg:gap-8">
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
                                    <button onclick="tittleAddingBtn('${escape(post.title)}',${post.view_count})"><img src="images/inbox.png" alt=""></button>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        postsContainer.appendChild(postDiv);


    });

}



const categoryAllPosts = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`)
    const data = await res.json()
    const allPosts = data.posts;
    // console.log(allPosts);

    const postsContainer = document.getElementById('card-container');

    postsContainer.innerHTML = ''
    allPosts.forEach(post => {
        // console.log(post);
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <div class="lg:w-[900px] flex flex-col lg:flex-row gap-2 bg-[#797dfc1a] p-3 lg:p-10 rounded-3xl">
                        <!-- Avter div -->
                        <div>
                        <div class="relative mt-5">
                        <img class="w-[100px] h-[100px] rounded-full" src="${post.image}" />
                        <div class="absolute top-2 left-[78px] h-[15px] w-[15px] rounded-full ${post.isActive ? "bg-green-700" : "bg-red-700"}"></div>
                    </div>
                        </div>
                        <!-- Text div -->
                        <div class="font-inter space-y-6">
                            <div class="flex items-center gap-2 lg:gap-5 font-medium text-[#12132dcc]">
                                <p># <span>${post.category}</span></p>
                                <p>Author : <span>${post.author.name}</span></p>
                            </div>
                            <h3 class="font-mulish text-[#12132D] font-bold text-xl">${post.title}</h3>
                            <p class="text-base text-[#12132D]">${post.description}</p>
                            <img class="w-full" src="images/Line 1 (3).png" alt="">
                            <!-- icon div -->
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-2 lg:gap-8">
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
                                    <button onclick="tittleAddingBtn('${escape(post.title)}',${post.view_count})"><img src="images/inbox.png" alt=""></button>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        postsContainer.appendChild(postDiv);


    });

    // hide Loading Spinner

    loadingSpinner(false)
}


fetchAllPosts();


// handle Search 

const handleSearch = async () => {

    loadingSpinner(true)
    const searchBoxValue = document.getElementById('search-box').value;
    // console.log(searchBoxValue)
    categoryAllPosts(searchBoxValue)

}


// Loading Spinner


const loadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
        // setTimeout(() => {
        //     loadingSpinner();
        // }, 10000)
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}


// Button Function

const tittleAddingBtn = (name, viewCount) => {
    console.log(name, viewCount)
    const markingDivContainer = document.getElementById('marking-div');
    const markingDiv = document.createElement('div')

    markingDiv.innerHTML = `
    <div class="flex justify-between items-center p-2 lg:p-4 bg-white rounded-2xl">
                        <h2 class="font-mulish font-semibold text-xs lg:text-base text-[#12132D]">${unescape(name)}</h2>
                        <div class="flex items-center gap-1 text-xs lg:text-base text-[#12132D]">
                            <img src="images/eye.png" alt="">
                            <p>${viewCount}</p>
                        </div>
                    </div>
    `;
    markingDivContainer.appendChild(markingDiv);

    let count = parseInt(document.getElementById('count').innerText);
    count++;
    document.getElementById('count').innerText = count;
    // console.log(typeof count)
}


// latest posts

const fetchLatestPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    console.log(data)

    const latestCardContainer = document.getElementById('latest-card-container');
    data.forEach(card => {
        console.log(card)
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = `
        <div class="card bg-base-100 border-2 border-solid border-[#12132d26] rounded-3xl">
                    <figure class="px-10 pt-10">
                        <img src="${card.cover_image}" alt="Shoes"
                            class="rounded-xl" />
                    </figure>
                    <div class="space-y-3 card-body">
                        <div class="flex items-center gap-2">
                            <img src="images/date.png" alt="">
                            <p class="font-mulish text-[#12132d99]">${card.author?.posted_date || 'No Publish Date'}</p>
                        </div>
                        <h4 class="font-mulish font-extrabold text-lg text-[#12132D]">${card.title}</h4>
                        <p class="font-mulish text-[#12132d99]">${card.description}</p>
                        <div class=" flex items-center gap-3">
                            <div class="avatar">
                                <div class="w-24 rounded-full">
                                    <img src="${card.profile_image}" />
                                </div>
                            </div>
                            <div class="font-mulish">
                                <h5 class="text-base font-bold text-[#12132D]">${card.author.name}</h5>
                                <p>${card.author?.designation || 'Unknown'}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        latestCardContainer.appendChild(cardDiv)

    })
}

fetchLatestPosts();

