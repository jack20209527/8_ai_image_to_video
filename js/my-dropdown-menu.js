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
        menuContainer.className = 'fixed mt-1 px-2 bg-[#1a1a1a] rounded-[4px] shadow-lg py-2 border border-[#FF3366]/20 transition-all duration-300';
        menuContainer.style.width = `${options.width}px`;
        menuContainer.style.zIndex = '1000';
    
        // 创建菜单项
        menuItems.forEach((item, index) => {
            const menuItem = document.createElement('a');
            menuItem.href = '#';
            menuItem.className = 'flex items-center justify-center py-2 text-sm text-white hover:bg-[#FF3366]/20 hover:rounded-[4px] transition-colors';
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
}

