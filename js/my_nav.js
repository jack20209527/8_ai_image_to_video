// 顶部导航栏和移动菜单

// 页脚布局内容
const nav_header_content = `
        <div class="max-w-[1400px] mx-auto h-full px-4 flex items-center">
            <div class="flex items-center gap-2 text-xl font-semibold select-none">
                <span class="text-[#6aa7ff]">Seedance</span>
                <span class="text-white">AI</span>
            </div>
            <!-- 桌面端导航 -->
            <nav class="ml-6 hidden lg:flex items-center gap-6 text-sm text-gray-300">
                <button id="id_btn_nav_video" class="group inline-flex items-center gap-1.5 hover:text-white cursor-pointer">
                    AI 视频
                    <svg class="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <button id="id_btn_nav_image" class="group inline-flex items-center gap-1.5 hover:text-white cursor-pointer">
                    AI 图片
                    <svg class="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <button id="id_btn_nav_effects" class="group inline-flex items-center gap-1.5 hover:text-white cursor-pointer">
                    视频特效
                    <svg class="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <button id="id_btn_nav_gallery" class="group inline-flex items-center gap-1.5 hover:text-white cursor-pointer">
                    画廊
                    <svg class="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <button id="id_btn_nav_pricing" class="group inline-flex items-center gap-1.5 hover:text-white cursor-pointer">
                    价格
                    <svg class="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </button>
            </nav>
            <div class="ml-auto flex items-center gap-3">
                <!-- Avatar -->
                <button class="ml-1 w-8 h-8 rounded-full bg-gradient-to-r from-[#344151] to-[#1e2633] text-xs text-white flex items-center justify-center">不息</button>
            
                <!-- 移动端菜单按钮 - 三条横线 -->
                <button id="id_btn_mobile_more" class="lg:hidden p-2 rounded-md bg-white/5 hover:bg-white/10" title="菜单">
                    <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

            </div>
        </div>
        
        <!-- 移动端菜单 -->
       <div id="id_mobile_menu" class="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur border-b border-white/5 max-h-[400px] overflow-y-auto hidden z-40">
            <div class="px-4 py-4 space-y-4">
                <div>
                    <div class="text-[12px] tracking-wide text-gray-400 mb-2">Seedance Model</div>
                    <nav class="space-y-1">
                        <button class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-red-500 transition">
                            <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h10M7 14h6"/></svg>
                            <span>文字生成视频</span>
                        </button>
                        <button class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-red-500 transition">
                            <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
                            <span>图片生成视频</span>
                        </button>
                        <button class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-red-500 transition">
                            <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v12H4z"/><path d="M4 20h16"/></svg>
                            <span>动画</span>
                        </button>
                        <button class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-red-500 transition">
                            <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 8h8v8H8z"/></svg>
                            <span>多镜头叙事</span>
                        </button>
                    </nav>
                </div>

                <div class="border-t border-white/10"></div>

                <div>
                    <div class="text-[12px] tracking-wide text-gray-400 mb-2">Popular Model</div>
                    <nav class="space-y-1">
                        <button class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-red-500 transition">
                            <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.39 4.84L20 8l-4 3.9L17 18l-5-2.6L7 18l1-6.1L4 8l5.61-1.16L12 2z"/></svg>
                            <span>视频特效</span>
                            <span class="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">New</span>
                        </button>
                        <button class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-red-500 transition">
                            <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
                            <span>Veo3</span>
                        </button>
                        <button class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-red-500 transition">
                            <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"/></svg>
                            <span>Hailuo AI</span>
                        </button>
                        <button class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-300 hover:text-red-500 transition">
                            <svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
                            <span>Kling AI</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
`;



// 包括左侧和顶部导航的点击
// path_level: ../ 或者 ./
function init_nav_event(path_level){

    document.addEventListener('DOMContentLoaded', () => {
        console.log('[Init] DOM加载完成，开始设置 --- 导航条的监听事件 {path_level: ' + path_level + '}');

        const headerElement = document.querySelector('header');
        if (headerElement) {
            headerElement.innerHTML = nav_header_content;
        }


        // 点击导航栏 视频 
        DropdownMenuUtil.init('id_btn_nav_video', ['Blog1', 'Blog2', 'Blog3'], 0, 8, 200, (item, index) => {
            console.log(`选择了: ${item}, 索引: ${index}  `);
            DropdownMenuUtil.hide();
        });
        
        //左侧导航: 跳转到 文生视频页面
        ClickUtil.onClick('id_btn_nav_text_to_video', () => {
            console.log(`选择了: id_btn_nav_text_to_video`);
            window.location.href = path_level + "text-to-video/index.html"; // ../
        });
        //左侧导航: 跳转到 图生视频页面
        ClickUtil.onClick('id_btn_nav_image_to_video', () => {
            console.log(`选择了: id_btn_nav_image_to_video`);
            window.location.href = path_level + "image-to-video/index.html";
        });
        // 移动端菜单
        bindMobileMenu ();


    });
}

// 绑定移动端菜单
function bindMobileMenu(){
    var moreBtn = document.getElementById('id_btn_mobile_more');
    var mobileMenu = document.getElementById('id_mobile_menu');
    if(!moreBtn || !mobileMenu){ console.warn('【移动端菜单】未找到相关控件'); return; }
    
    // 切换菜单显示状态
    function toggleMenu(){
        var isHidden = mobileMenu.classList.contains('hidden');
        if(isHidden){
            mobileMenu.classList.remove('hidden');
            console.log('【移动端菜单】显示菜单');
        } else {
            mobileMenu.classList.add('hidden');
            console.log('【移动端菜单】隐藏菜单');
        }
    }
    
    // 绑定更多按钮点击事件
    moreBtn.addEventListener('click', function(e){
        e.stopPropagation();
        toggleMenu();
    });
    
    // 点击菜单外部关闭菜单
    document.addEventListener('click', function(e){
        if(!mobileMenu.contains(e.target) && !moreBtn.contains(e.target)){
            if(!mobileMenu.classList.contains('hidden')){
                mobileMenu.classList.add('hidden');
                console.log('【移动端菜单】点击外部关闭菜单');
            }
        }
    });
    
    // 监听窗口大小变化，在大屏幕时自动隐藏菜单
    window.addEventListener('resize', function(){
        if(window.innerWidth >= 1024 && !mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.add('hidden');
            console.log('【移动端菜单】窗口变大，自动隐藏菜单');
        }
    });
    
    console.log('【移动端菜单】初始化完成');
}





