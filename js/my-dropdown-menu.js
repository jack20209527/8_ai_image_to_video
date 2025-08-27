/**
 * 下拉菜单工具类
 *         // DropdownMenuUtil.init('someButton', ['选项1', '选项2', '选项3'], 0, 16, 200, (item, index) => {
 *         // console.log(`选择了: ${item}, 索引: ${index}`);
 *         // }); // 这里加上结束括号和分号
 */
// 确保类被正确定义为全局变量
window.DropdownMenuUtil = class DropdownMenuUtil {
    constructor() {
        this.activeMenu = null;
        this.outsideClickHandler = null;
    }

    static instance = null;

    static getInstance() {
        if (!DropdownMenuUtil.instance) {
            DropdownMenuUtil.instance = new DropdownMenuUtil();
        }
        return DropdownMenuUtil.instance;
    }

    /**
     * 初始化下拉菜单
     */
    static init(buttonId, menuItems, offsetX = 0, offsetY = 4, width = 192, onSelect = null) {
        // 移除 DOMContentLoaded 事件监听
        const button = document.getElementById(buttonId);
        if (button) {
            console.log(`[Init] 找到目标按钮，添加点击事件监听器: ${buttonId}`);
            button.addEventListener('click', () => {
                console.log(`[Button] ${buttonId} 被点击`);
                DropdownMenuUtil.getInstance().show(buttonId, menuItems, {
                    offsetX,
                    offsetY,
                    width,
                    onSelect
                });
            });
        } else {
            console.error(`[Init] 错误：未找到ID为"${buttonId}"的按钮`);
        }
    }

    show(targetId, menuItems, options = {}) {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
    
        if (this.activeMenu) {
            this.hide();
            return;
        }
    
        const defaultOptions = {
            offsetX: 0,
            offsetY: 4,
            width: 192,
            onSelect: null
        };
        options = { ...defaultOptions, ...options };
    
        const menuContainer = document.createElement('div');
        menuContainer.id = 'dropdown-menu-container';
        // 外观：深色背景、圆角、轻边框与柔和阴影，符合截图风格
        menuContainer.className = 'fixed z-[1000] mt-2 p-2 rounded-[8px] bg-[#1a1d26] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(255,255,255,0.03)]';
        menuContainer.style.width = `${options.width}px`;
        menuContainer.style.zIndex = '1000';
    
        // 创建菜单项（仅样式变更，不改逻辑）
        menuItems.forEach((item, index) => {
            const menuItem = document.createElement('a');
            menuItem.href = '#';
            // 外观：较大内边距、圆角、默认浅灰文字；hover 提升亮度；点击短暂红色强调
            menuItem.className = 'block w-full text-left my-1 px-4 py-3 rounded-[6px] text-[14px] leading-[12px] text-[#e5e7eb] hover:bg-white/10 hover:text-red-500 active:text-red-500 active:bg-white/10 transition-colors';
            menuItem.textContent = item;
    
            menuItem.addEventListener('click', (e) => {
                e.preventDefault();
                if (options.onSelect) {
                    options.onSelect(item, index);
                }
                this.hide();
            });
    
            menuContainer.appendChild(menuItem);
        });
    
        // 在点击时获取最新位置
        const targetRect = targetElement.getBoundingClientRect();
        menuContainer.style.top = `${targetRect.bottom + options.offsetY}px`;
        menuContainer.style.left = `${targetRect.left + options.offsetX}px`;
    
        // 添加到文档并显示
        document.body.appendChild(menuContainer);
        this.activeMenu = menuContainer;
    
        // 添加动画效果
        requestAnimationFrame(() => {
            menuContainer.style.opacity = '1';
            menuContainer.style.transform = 'translateY(0)';
        });
    
        this.addOutsideClickHandler();
    }

    hide() {
        if (this.activeMenu) {
            this.activeMenu.remove();
            this.activeMenu = null;
            if (this.outsideClickHandler) {
                document.removeEventListener('click', this.outsideClickHandler);
                this.outsideClickHandler = null;
            }

        }
    }

    addOutsideClickHandler() {
        if (this.outsideClickHandler) {
            document.removeEventListener('click', this.outsideClickHandler);
        }

        this.outsideClickHandler = (e) => {
            if (this.activeMenu && !this.activeMenu.contains(e.target)) {
                this.hide();
            }
        };

        setTimeout(() => {
            document.addEventListener('click', this.outsideClickHandler);
        }, 0);
    }

    // 用户点击后主动关闭
    static hide(){ try { DropdownMenuUtil.getInstance().hide(); } catch(_) {} }
    
}

