/**
 * 通用UI组件库
 * 包含下拉菜单、选择器等通用组件
 */

// ---------------------------------------
// Dropdown (通用弹窗) 组件：anchor + items
// ---------------------------------------
function Dropdown(){
    this.menu = null;
    this.anchor = null;
    this._boundOutside = null;
    this._boundResize = null;
}

Dropdown.prototype.show = function(anchor, items, activeIndex, onSelect){
    if(typeof activeIndex === 'undefined'){ activeIndex = -1; }
    if(typeof onSelect !== 'function'){ onSelect = function(){}; }
    // 若已展开且为同一触发器，则切换为关闭
    if(this.menu && this.anchor === anchor){ this.hide(); return; }
    this.hide();
    // 构建容器
    const menu = document.createElement('div');
    menu.className = 'dd-menu';
    // 填充条目
    for (var i=0;i<items.length;i++){
        var label = items[i];
        if(label === '---'){ // 分割线支持
            const sep = document.createElement('div');
            sep.className = 'dd-sep';
            menu.appendChild(sep);
            continue;
        }
        const it = document.createElement('div');
        it.className = 'dd-item' + (i===activeIndex ? ' dd-active' : '');
        it.textContent = label;
        it.addEventListener('click', (function(self, index, lbl){ return function(){ console.log('【顶栏下拉选择】', lbl); onSelect(index, lbl); self.hide(); }; })(this, i, label));
        menu.appendChild(it);
    }
    document.body.appendChild(menu);
    this.menu = menu;
    this.anchor = anchor;
    // 定位：按钮下方 8px，左对齐
    const rect = anchor.getBoundingClientRect();
    const top = Math.round(rect.bottom + 8);
    const left = Math.round(rect.left);
    menu.style.top = top + 'px';
    menu.style.left = left + 'px';
    // 监听关闭
    setTimeout(function(){
        this._boundOutside = this.onOutside.bind(this);
        this._boundResize = this.onResize.bind(this);
        document.addEventListener('click', this._boundOutside);
        window.addEventListener('resize', this._boundResize);
        window.addEventListener('scroll', this._boundResize, true);
        console.log('【顶栏下拉】已显示，位置 top/left =', top, left);
    }.bind(this), 0);
};

Dropdown.prototype.onOutside = function(e){ if(this.menu && !this.menu.contains(e.target)){ this.hide(); } };
Dropdown.prototype.onResize = function(){ this.hide(); };
Dropdown.prototype.hide = function(){
    if(this.menu){
        this.menu.remove();
        this.menu = null;
        this.anchor = null;
        if(this._boundOutside){ document.removeEventListener('click', this._boundOutside); this._boundOutside=null; }
        if(this._boundResize){ window.removeEventListener('resize', this._boundResize); window.removeEventListener('scroll', this._boundResize, true); this._boundResize=null; }
        console.log('【顶栏下拉】已关闭');
    }
};

// ---------------------------------------
// Select-like Dropdown (通用选择器) 组件
// ---------------------------------------
function SelectDropdown(){
    this.menu = null;
    this.anchor = null;
    this._boundOutside = null;
    this._boundResize = null;
}

SelectDropdown.prototype.show = function(anchor, items, activeIndex, onSelect){
    if(typeof activeIndex === 'undefined'){ activeIndex = 0; }
    if(typeof onSelect !== 'function'){ onSelect = function(){}; }
    // 若已展开且为同一触发器，则关闭
    if(this.menu && this.anchor === anchor){ this.hide(); return; }
    this.hide();
    const menu = document.createElement('div');
    menu.className = 'sd-menu';
    // 跟随父容器宽度：找到最近的定位容器或父块元素
    const rect = anchor.getBoundingClientRect();
    const parent = anchor.parentElement || anchor;
    const pRect = parent.getBoundingClientRect();
    menu.style.minWidth = Math.round(pRect.width) + 'px';
    // 构建条目（支持主标题+说明+颜色点+对勾）
    for (var i=0;i<items.length;i++){
        var it = items[i];
        const row = document.createElement('div');
        row.className = 'sd-item' + (i===activeIndex ? ' sd-active' : '');
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.style.background = it.dot || '#7c3aed';
        const textWrap = document.createElement('div');
        const title = document.createElement('div');
        title.textContent = it.title;
        const meta = document.createElement('div');
        meta.className = 'sd-meta';
        meta.textContent = it.meta || '';
        textWrap.appendChild(title);
        if(it.meta){ textWrap.appendChild(meta); }
        row.appendChild(dot);
        row.appendChild(textWrap);
        if(i===activeIndex){
            const check = document.createElement('div');
            check.className = 'sd-check';
            check.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
            row.appendChild(check);
        }
        row.addEventListener('click', (function(self, index, item){ return function(){ console.log('【选择器选择】', item.title); onSelect(index, item); self.hide(); }; })(this, i, it));
        menu.appendChild(row);
    }
    document.body.appendChild(menu);
    this.menu = menu;
    this.anchor = anchor;
    // 定位：下方 6px 左对齐
    const top2 = Math.round(rect.bottom + 6);
    const left2 = Math.round(pRect.left);
    menu.style.top = top2 + 'px';
    menu.style.left = left2 + 'px';
    // 关闭监听
    setTimeout(function(){
        menu.classList.add('show');
        this._boundOutside = this.onOutside.bind(this);
        this._boundResize = this.onResize.bind(this);
        document.addEventListener('click', this._boundOutside);
        window.addEventListener('resize', this._boundResize);
        window.addEventListener('scroll', this._boundResize, true);
        console.log('【选择器】已显示，位置 top/left =', top2, left2, ' 宽度 =', Math.round(pRect.width));
    }.bind(this),0);
};

SelectDropdown.prototype.onOutside = function(e){ if(this.menu && !this.menu.contains(e.target)){ this.hide(); } };
SelectDropdown.prototype.onResize = function(){ this.hide(); };
SelectDropdown.prototype.hide = function(){
    if(this.menu){
        this.menu.remove();
        this.menu = null;
        this.anchor = null;
        if(this._boundOutside){ document.removeEventListener('click', this._boundOutside); this._boundOutside=null; }
        if(this._boundResize){ window.removeEventListener('resize', this._boundResize); window.removeEventListener('scroll', this._boundResize, true); this._boundResize=null; }
        console.log('【选择器】已关闭');
    }
};

// ---------------------------------------
// 绑定到顶栏导航按钮的下拉菜单
// ---------------------------------------
function bindTopNavDropdowns(){
    console.log('【顶栏初始化】开始绑定顶栏点击事件');
    var dd = new Dropdown();
    var commonItems = ['All','Videos','AI Video Effects','Images'];
    function attach(btnId){
        var btn = document.getElementById(btnId);
        if(!btn) return;
        btn.addEventListener('click', function(e){
            e.stopPropagation();
            console.log('【顶栏点击】按钮ID =', btnId);
            dd.show(btn, commonItems, 2, function(i, label){
                // 回调可扩展
            });
        });
    }
    attach('id_btn_nav_video');
    attach('id_btn_nav_effects');
    attach('id_btn_nav_image');
    attach('id_btn_nav_gallery');
    attach('id_btn_nav_pricing');
    console.log('【顶栏初始化】完成');
}

// ---------------------------------------
// 移动端菜单绑定
// ---------------------------------------
function bindMobileMenu(){
    console.log('【移动端菜单】开始初始化移动端菜单');
    var moreBtn = document.getElementById('id_btn_mobile_more');
    var mobileMenu = document.getElementById('id_mobile_menu');
    
    if(!moreBtn || !mobileMenu){
        console.warn('【移动端菜单】未找到移动端菜单相关控件');
        return;
    }
    
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

// ---------------------------------------
// 侧边栏选择功能
// ---------------------------------------
function initSidebarSelection(){
    console.log('【侧边栏初始化】开始绑定侧边栏点击事件');
    var sidebar = document.querySelector('aside');
    if(!sidebar) return;
    var items = Array.prototype.slice.call(sidebar.querySelectorAll('.sb-item'));
    console.log('【侧边栏初始化】找到条目数量 =', items.length);
    if(items.length === 0) return;
    var hasActive = false;
    for (var i=0;i<items.length;i++){ if(items[i].classList.contains('sb-active')) { hasActive = true; break; } }
    if(!hasActive){ items[0].classList.add('sb-active'); }
    function selectItem(target){
        for (var j=0;j<items.length;j++){ items[j].classList.remove('sb-active'); }
        target.classList.add('sb-active');
        console.log('【侧边栏选中】当前选中 =', target.textContent.trim());
    }
    for (var k=0;k<items.length;k++){
        var el = items[k];
        el.setAttribute('role','button');
        el.setAttribute('tabindex','0');
        el.addEventListener('click', (function(t){ return function(){ console.log('【侧边栏点击】', t.textContent.trim()); selectItem(t); }; })(el));
        el.addEventListener('keydown', (function(t){ return function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); selectItem(t); } }; })(el));
    }
    console.log('【侧边栏初始化】完成');
}

// ---------------------------------------
// 侧栏路由绑定
// ---------------------------------------
function bindSidebarRoute(){
    var items = document.querySelectorAll('.sb-item');
    if(!items || items.length===0){ console.warn('【侧栏路由】未找到 sb-item'); return; }
    for(var i=0;i<items.length;i++){
        (function(el){
            var labelEl = el.querySelector('.sb-text');
            var text = labelEl ? labelEl.textContent.trim().toLowerCase() : '';
            var target = '';
            if(text.indexOf('text to video')>-1){ target = '../text-to-video/index.html'; }
            if(text.indexOf('image to video')>-1){ target = '../image-to-video/index.html'; }
            if(target){
                el.addEventListener('click', function(){
                    console.log('【侧栏路由】跳转到: ', target);
                    window.location.href = target;
                });
            }
        })(items[i]);
    }
    console.log('【侧栏路由】已绑定');
}

// ---------------------------------------
// 分辨率选择绑定
// ---------------------------------------
function bindResolutionSelect(){
    var btn = document.getElementById('id_btn_resolution');
    var text = document.getElementById('id_text_resolution');
    var nativeSel = document.getElementById('id_select_resolution');
    if(!btn || !text || !nativeSel) return;
    var sd = new SelectDropdown();
    var items = [
        { title:'480p', meta:'Basic Quality • 1 credit', dot:'#a78bfa' },
        { title:'720p', meta:'High Quality • 2 credits', dot:'#60a5fa' },
        { title:'1080p', meta:'Ultra Quality • 3 credits', dot:'#f59e0b' }
    ];
    function activeIndex(){
        var val = nativeSel.value;
        for (var i=0;i<items.length;i++){ if(items[i].title===val) return i; }
        return 0;
    }
    btn.addEventListener('click', function(e){
        e.stopPropagation();
        console.log('【分辨率点击】当前值 =', nativeSel.value);
        sd.show(btn, items, activeIndex(), function(i, it){
            nativeSel.value = it.title;
            text.textContent = it.title;
            console.log('【分辨率变更】新值 =', it.title);
        });
    });
    console.log('【分辨率初始化】完成，默认值 =', nativeSel.value);
}

// ---------------------------------------
// 模型选择绑定
// ---------------------------------------
function bindModelSelect(){
    var btn = document.getElementById('id_btn_model');
    var text = document.getElementById('id_text_model');
    var nativeSel = document.getElementById('id_select_model');
    if(!btn || !text || !nativeSel){ console.warn('【模型初始化】未找到模型相关控件'); return; }
    var sd = new SelectDropdown();
    var items = [
        { title:'Google VEO3',  meta:'高质量 • 稳定表现', dot:'#a78bfa' },
        { title:'RunWay Gen-4', meta:'高质量 • 创意镜头', dot:'#60a5fa' },
        { title:'Midjourney',   meta:'风格化 • 表现力强', dot:'#f59e0b' }
    ];
    function activeIndex(){
        var val = nativeSel.value;
        for (var i=0;i<items.length;i++){ if(items[i].title===val) return i; }
        // 由于 select 的 value 与 title 不一致（示例值为480p/720p/1080p），这里用显示文本兜底
        var fallback = text ? text.textContent : '';
        for (var j=0;j<items.length;j++){ if(items[j].title===fallback) return j; }
        return 0;
    }
    btn.addEventListener('click', function(e){
        e.stopPropagation();
        console.log('【模型点击】当前 =', text ? text.textContent : '');
        sd.show(btn, items, activeIndex(), function(i, it){
            // 同步显示文本
            if(text) text.textContent = it.title;
            // 同步原生 select（为了表单/可访问性），将 option 的选中更新到与 title 同名项
            try{
                var matched = null;
                for (var k=0;k<nativeSel.options.length;k++){
                    if(nativeSel.options[k].text === it.title){ matched = nativeSel.options[k]; break; }
                }
                if(matched){ nativeSel.value = matched.value; }
            }catch(err){ console.warn('【模型选择】同步原生select失败：', err); }
            console.log('【模型变更】新值 =', it.title);
        });
    });
    console.log('【模型初始化】完成，默认值 =', text ? text.textContent : '');
}

// ---------------------------------------
// 宽高比选择绑定
// ---------------------------------------
function bindAspectRatioSelect(){
    // 容器、隐藏域
    var group = document.getElementById('id_group_aspect_ratio');
    var input = document.getElementById('id_input_aspect_ratio');
    if(!group || !input){ console.warn('【宽高比初始化】未找到控件'); return; }
    var items = group.querySelectorAll('.ar-item');

    // 切换选中样式的函数
    function setActive(target){
        for(var i=0;i<items.length;i++){
            items[i].classList.remove('ar-active','ring-2','ring-pink-500/30','border-pink-500/40');
            // 将文字与占位颜色恢复（默认灰色）
            var label = items[i].querySelector('.ar-label');
            var block = items[i].querySelector('.ar-block');
            if(label){ label.classList.remove('text-pink-400','font-semibold'); label.classList.add('text-gray-300'); }
            if(block){ block.classList.remove('bg-pink-500'); block.classList.add('bg-white/10'); }
        }
        target.classList.add('ar-active','ring-2','ring-pink-500/30','border-pink-500/40');
        var label2 = target.querySelector('.ar-label');
        var block2 = target.querySelector('.ar-block');
        if(label2){ label2.classList.remove('text-gray-300'); label2.classList.add('text-pink-400','font-semibold'); }
        if(block2){ block2.classList.remove('bg-white/10'); block2.classList.add('bg-pink-500'); }
    }

    // 绑定点击事件
    for(var j=0;j<items.length;j++){
        (function(el){
            el.addEventListener('click', function(){
                var val = el.getAttribute('data-value');
                input.value = val; // 写入隐藏域
                setActive(el);    // 切换高亮
                console.log('【宽高比变更】新值 =', val);
            });
        })(items[j]);
    }

    // 根据隐藏域初始值设置一次选中
    var init = input.value || '9:16';
    for(var k=0;k<items.length;k++){
        if(items[k].getAttribute('data-value') === init){ setActive(items[k]); break; }
    }
    console.log('【宽高比初始化】完成，默认 =', input.value);
}

// ---------------------------------------
// 通用初始化函数
// ---------------------------------------
function initCommonUIComponents(){
    try { console.log('【通用UI组件】开始初始化'); } catch(_) {}
    try { initSidebarSelection && initSidebarSelection(); } catch(err){ console.error('【初始化错误】侧边栏初始化失败：', err); }
    try { bindTopNavDropdowns && bindTopNavDropdowns(); } catch(err){ console.error('【初始化错误】顶栏初始化失败：', err); }
    try { bindResolutionSelect && bindResolutionSelect(); } catch(err){ console.error('【初始化错误】分辨率初始化失败：', err); }
    try { bindAspectRatioSelect && bindAspectRatioSelect(); } catch(err){ console.error('【初始化错误】宽高比初始化失败：', err); }
    try { bindModelSelect && bindModelSelect(); } catch(err){ console.error('【初始化错误】模型初始化失败：', err); }
    try { bindSidebarRoute && bindSidebarRoute(); } catch(err){ console.error('【初始化错误】侧栏路由失败：', err); }
    try { bindMobileMenu && bindMobileMenu(); } catch(err){ console.error('【初始化错误】移动端菜单失败：', err); }
    try { console.log('【通用UI组件】初始化结束'); } catch(_) {}
}

// 导出所有函数到全局作用域
window.Dropdown = Dropdown;
window.SelectDropdown = SelectDropdown;
window.bindTopNavDropdowns = bindTopNavDropdowns;
window.bindMobileMenu = bindMobileMenu;
window.initSidebarSelection = initSidebarSelection;
window.bindSidebarRoute = bindSidebarRoute;
window.bindResolutionSelect = bindResolutionSelect;
window.bindModelSelect = bindModelSelect;
window.bindAspectRatioSelect = bindAspectRatioSelect;
window.initCommonUIComponents = initCommonUIComponents; 