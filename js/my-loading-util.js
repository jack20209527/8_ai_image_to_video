/**
 * 通用加载状态工具类
 */
class LoadingUtil {
    constructor() {
        this.loadingElement = null;
    }

    static instance = null;

    /**
     * 获取单例实例
     */
    static getInstance() {
        if (!LoadingUtil.instance) {
            LoadingUtil.instance = new LoadingUtil();
        }
        return LoadingUtil.instance;
    }

    /**
     * 显示加载状态
     * @param {string} message - 加载提示文本（可选）
     * @param {string} subMessage - 副标题文本（可选）
     */

 
    static show(message = 'Loading...', subMessage = 'please wait a moment') {
        const instance = LoadingUtil.getInstance();
        if (instance.loadingElement) {
            return;
        }
    
        const loadingElement = document.createElement('div');
        loadingElement.className = 'fixed inset-0 flex items-center justify-center z-50';
        
        loadingElement.innerHTML = `
            <div class="relative" style="width: 360px; height: 200px;">
                <!-- 背景光晕效果 -->
                <div class="absolute inset-0 bg-gradient-to-r from-[#FF3366]/20 via-[#9D34DA]/20 to-[#FF3366]/20 rounded-2xl blur-xl animate-pulse"></div>
                
                <!-- 主容器 -->
                <div class="relative w-full h-full bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 overflow-hidden">
                    <!-- 动态背景效果 -->
                    <div class="absolute inset-0 bg-gradient-to-r from-[#FF3366]/10 to-[#9D34DA]/10 animate-gradient"></div>
                    <div class="absolute inset-0 bg-grid opacity-10"></div>
                    
                    <!-- 内容区域 -->
                    <div class="relative flex flex-col items-center justify-center h-full">
                        <!-- 加载动画 -->
                        <div class="relative mb-6">
                            <div class="w-16 h-16 rounded-full border-t-2 border-b-2 border-[#FF3366] loading-spinner"></div>
                        </div>
                        
                        <!-- 文字区域 -->
                        <div class="text-center">
                            <p class="text-xl font-bold text-white mb-2">${message}</p>
                            ${subMessage ? `<p class="text-gray-400 text-center">${subMessage}</p>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        // 添加必要的样式
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .loading-spinner {
                animation: spin 1s linear infinite;
            }
            .animate-gradient {
                background-size: 200% 200%;
                animation: gradient 8s linear infinite;
            }
            .bg-grid {
                background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                background-size: 20px 20px;
            }
        `;
        document.head.appendChild(style);
    
        document.body.appendChild(loadingElement);
        instance.loadingElement = loadingElement;
    }

    /**
     * 隐藏加载状态
     */
    static hide() {
        const instance = LoadingUtil.getInstance();
        if (instance.loadingElement) {
            instance.loadingElement.remove();
            instance.loadingElement = null;
        }
    }
}

// 导出为全局变量
window.LoadingUtil = LoadingUtil; 