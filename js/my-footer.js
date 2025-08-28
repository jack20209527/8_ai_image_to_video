// 页脚布局内容
const footerContent = `
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Logo和链接部分 -->
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <!-- Logo部分 - 在移动端占满宽度 -->
                <div class="col-span-2 sm:col-span-2 md:col-span-1 mb-8 md:mb-0">
                    <a href="/" class="flex items-center space-x-2">
                        <img src="/img/logo.png" alt="credit_cart" class="w-10 h-10">
                        <span class="text-xl font-bold">Flux Kontext AI</span>
                    </a>
                    <p class="mt-4 text-gray-400 text-sm md:text-base">
                        Free AI Image Enhancement & Upscaling. No Watermark. Secure & Online.
                    </p>
                </div>
    
                <!-- 功能链接 -->
                <div class="col-span-1 md:col-span-1 md:col-start-3 md:order-2">
                    <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">Function</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Super Resolution</a></li>
                        <li><a href="#" class="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Smart Repair</a></li>
                        <li><a href="#" class="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Color Enhancement</a></li>
                    </ul>
                </div>
    
                <!-- 关于链接 -->
                <div class="col-span-1 md:col-span-1 md:col-start-4 md:order-3">
                    <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4">About</h3>
                    <ul class="space-y-2">
                        <li><a href="/term" class="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Terms Of Use</a></li>
                        <li><a href="/privacy" class="text-sm md:text-base text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
    
            <!-- 版权信息 -->
            <div class="mt-8 md:mt-6 pt-6 md:pt-8 border-t border-white/10 text-center">
                <p class="text-sm md:text-base text-gray-400">&copy; 2025 EnhancePix. All rights reserved.</p>
            </div>
        </div>
`;

// 在页面加载完成后将内容添加到footer标签中
document.addEventListener('DOMContentLoaded', function() {
  const footerElement = document.querySelector('footer');
  if (footerElement) {
      footerElement.innerHTML = footerContent;
  }
});
