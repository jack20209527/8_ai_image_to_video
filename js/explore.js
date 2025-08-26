// 推荐游戏数据
const recommendedGames = [
    {
        href: "../incredibox-mustard/",
        imgSrc: "../img/incredibox-mustard.png",
        alt: "Incredibox Mustard",
        title: "Incredibox Mustard",
        description: "Create mustard beats!"
    },
    {
        href: "../",
        imgSrc: "../img/sprunki.png",
        alt: "Sprunki Incredibox",
        title: "Sprunki Incredibox",
        description: "Create spunky beats!"
    },

    {
        href: "../dandys-world/",
        imgSrc: "../img/dandys-world.png",
        alt: "Sprunki Dandy's World",
        title: "Dandy's World",
        description: "Creepy yet captivating!"
    },
    {
        href: "../sprunked/",
        imgSrc: "../img/sprunked.jpg",
        alt: "Sprunked",
        title: "Sprunked",
        description: "Explore the unique cast!"
    },
    {
        href: "../sprunki-phase-3/",
        imgSrc: "../img/sprunki-phase-3.jpg",
        alt: "Sprunki Phase 3",
        title: "Sprunki Phase 3",
        description: "Discover the new Sprunki Phase 3!"
    },
    {
        href: "../sprunki-phase-4/",
        imgSrc: "../img/sprunki-phase-4.jpg",
        alt: "Sprunki Phase 4",
        title: "Sprunki Phase 4",
        description: "Discover the new Sprunki Phase 4!"
    },

 
 
 
 
    {
        href: "../sprunki-phase-5/",
        imgSrc: "../img/sprunki-phase-5.jpg",
        alt: "Sprunki Phase 5",
        title: "Sprunki Phase 5",
        description: "Discover the new Sprunki Phase 5!"
    },
    {
        href: "../sprunki-phase-6/",
        imgSrc: "../img/sprunki-phase-6.png",
        alt: "Sprunki Phase 6",
        title: "Sprunki Phase 6",
        description: "Discover the new Sprunki Phase 6!"
    },
    {
        href: "../zombies-sprunki/",
        imgSrc: "../img/Zombies-Sprunki.png",
        alt: "Zombies Sprunki",
        title: "Zombies Sprunki",
        description: "Create spooky Halloween music!"
    },
    {
        href: "../sprunki-retake/",
        imgSrc: "../img/sprunki-retake.png",
        alt: "Sprunki Retake",
        title: "Sprunki Retake",
        description: "Experience the new retake!"
    },
];

// 渲染推荐游戏
function renderRecommendedGames() {
    const container = document.getElementById('recommended-games-container');
    if (!container) {
        console.error('Recommended games container not found');
        return;
    }

    let html = '';

    recommendedGames.forEach(game => {
        html += `
            <a href="${game.href}" class="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <img src="${game.imgSrc}" alt="${game.alt}" class="w-full h-24 object-cover">
                <div class="p-2">
                    <h3 class="text-sm font-semibold mb-1 text-green-700">${game.title}</h3>
                    <p class="text-xs text-gray-600">${game.description}</p>
                </div>
            </a>
        `;
    });

    container.innerHTML = html;
}
// When the DOM is loaded, execute the rendering
document.addEventListener('DOMContentLoaded', renderRecommendedGames);

// xuan rang header

// ... 现有的recommendedGames数组代码 ...

function getHeaderHTML(page_type = 0) {

let imgPath = './';
if (page_type == 0) {
    imgPath = './';
} else if(page_type == 1) {
    imgPath = '../';
} else if (page_type == 2) {
    imgPath = '../../';
}

// 头部HTML模板
let html = `
    <header class="bg-gradient-to-r from-green-800 to-green-900 text-white py-4 fixed top-0 left-0 w-full h-[60px] z-50 shadow-lg">
        <div class="container mx-auto px-4">
            <nav class="flex justify-between items-center">
                <div class="logo">
                    <a href="${imgPath}" class="flex items-center text-xl font-bold">
                        <i class="mr-1 hidden sm:block">
                            <img src="${imgPath}img/logo.png" class="w-[30px] h-[30px]  mr-2" alt="sprunki.help" />
                        </i> EnhancePix</a>
                </div>
                <ul class="nav-links hidden md:flex space-x-6">
                    <li><a href="${imgPath}play/" class="hover:text-green-400 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="inline-block mr-2">
                            <path fill="#FFD700" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5l-6 4.5z"/>
                        </svg> Make Beats</a></li>
                    
                </ul>
                <div class="burger md:hidden cursor-pointer">
                    <div class="line1 bg-white h-0.5 w-6 my-1 transition duration-300"></div>
                    <div class="line2 bg-white h-0.5 w-6 my-1 transition duration-300"></div>
                    <div class="line3 bg-white h-0.5 w-6 my-1 transition duration-300"></div>
                </div>
            </nav>
        </div>
    </header>

    <div class="mobile-nav fixed top-0 left-0 w-full h-screen bg-green-900 z-40 transform -translate-x-full transition duration-300 ease-in-out">
        <ul class="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
            <li><a href="${imgPath}play/" class="hover:text-yellow-400 transition duration-300">
                <i class="fas fa-play mr-2"></i> Make Beats</a></li>
            <li><a href="${imgPath}download/" class="hover:text-yellow-400 transition duration-300">
                <i class="fas fa-download mr-2"></i> Access</a></li>
            <li><a href="${imgPath}sprunki-characters/" class="hover:text-yellow-400 transition duration-300">
                <i class="fas fa-users mr-2"></i> Artists</a></li>
            <li><a href="${imgPath}sprunki-phase/" class="hover:text-yellow-400 transition duration-300">
                <i class="fas fa-music mr-2"></i> Volume</a></li>
        </ul>
    </div>`;

    return html;
}


// 渲染头部
function renderHeader(page_type = 0) {
    const headerContainer = document.querySelector('header');
    if (!headerContainer) {
        console.error('头部容器未找到');
        return;
    }
    headerContainer.innerHTML = getHeaderHTML(page_type);

    // 初始化移动端菜单
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    burger.addEventListener('click', () => {
        mobileNav.classList.toggle('-translate-x-full');
        body.classList.toggle('overflow-hidden');
        burger.classList.toggle('active');
        
        burger.children[0].classList.toggle('rotate-45');
        burger.children[0].classList.toggle('translate-y-1.5');
        burger.children[1].classList.toggle('opacity-0');
        burger.children[2].classList.toggle('-rotate-45');
        burger.children[2].classList.toggle('-translate-y-1.5');
    });
}

function getFooterHTML(page_type = 0) {

    let imgPath = './';
    if (page_type == 0) {
        imgPath = './';
    } else if(page_type == 1) {
        imgPath = '../';
    } else if (page_type == 2) {
        imgPath = '../../';
    }

    let html = `
    <footer class="bg-gray-800 text-white">
        <div class="mx-auto w-full py-10 px-4">
            <!-- 主要内容区域 -->
            <div class="flex flex-col md:flex-row md:justify-between gap-8">
                <!-- Logo部分 -->
                <div class="mb-6 md:mt-10 md:ml-10">
                    <a href="https://sprunki.help" class="flex items-center justify-center md:justify-start">
                        <img src="${imgPath}img/logo.png" class="w-[30px] h-[30px] mr-2" alt="sprunki.help" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">sprunki.help</span>
                    </a>
                </div>

                <!-- 链接网格部分 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
                    <!-- Friendly链接 -->
                    <div class="text-center md:text-left">
                        <h2 class="mb-6 text-medium font-semibold uppercase text-white">Friendly</h2>
                        <ul class="text-gray-300 font-medium">
                            <li class="mb-4">
                                <a href="https://www.mathsisfun.com/" class="hover:underline" target="_blank">Mathsis Fun</a>
                            </li>
                            <li>
                                <a href="https://www.crazygames.com/" class="hover:underline" target="_blank">Crazy Games</a>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- FAQ链接 -->
                    <div class="text-center md:text-left">
                        <h2 class="mb-6 text-medium font-semibold uppercase text-white">FAQ</h2>
                        <ul class="text-gray-300 font-medium">
                            <li class="mb-4">
                                <a href="${imgPath}sprunki/beat/" class="hover:underline" target="_blank">How Beat Sprunki?</a>
                            </li>
                            <li class="mb-4">
                                <a href="${imgPath}sprunki/easy/" class="hover:underline" target="_blank">Easy for Everyone?</a>
                            </li>
                            <li>
                                <a href="${imgPath}sprunki/online/" class="hover:underline" target="_blank">Play All Online?</a>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Legal链接 -->
                    <div class="text-center md:text-left">
                        <h2 class="mb-6 text-medium font-semibold uppercase text-white">Legal</h2>
                        <ul class="text-gray-300 font-medium">
                            <li class="mb-4">
                                <a href="${imgPath}sprunki/about" class="hover:underline" target="_blank">About Us</a>
                            </li>
                            <li>
                                <a href="${imgPath}sprunki/contact" class="hover:underline" target="_blank">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr class="my-10 border-gray-600" />

            <!-- 版权信息 -->
            <div class="mx-auto">
                <p class="text-center font-sans text-gray-300 text-sm">&copy; 2024 sprunki.help. All rights reserved. Embrace the Sprunki spirit!</p>
            </div>
        </div>
    </footer>
`;
    return html;
}


// 渲染尾部，必须要在export添加下
function renderFooter(page_type = 0) {
    const footerContainer = document.querySelector('footer');
    if (!footerContainer) {
        console.error('头部容器未找到');
        return;
    }
    footerContainer.innerHTML = getFooterHTML(page_type);
};

// ... 其他代码保持不变 ...

export { renderRecommendedGames, renderHeader, renderFooter };








// Export the function for use elsewhere
// export { renderRecommendedGames };