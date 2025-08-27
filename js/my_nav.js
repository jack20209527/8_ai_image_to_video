// 顶部导航栏和移动菜单的监听和事件
// 包括左侧和顶部导航的点击
// path_level: ../ 或者 ./
function init_nav_event(path_level){

    document.addEventListener('DOMContentLoaded', () => {
        console.log('[Init] DOM加载完成，开始设置 --- 导航条的监听事件 {path_level: ' + path_level + '}');

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





