async function fetchImages(page = 1) {
    return new Promise((resolve, reject) => {
        get_more_images((images, totalPages, error) => {
            if (error) {
                console.error('获取图片失败:', error);
                reject(error);
                document.getElementById('id_profile_total_images').innerText = `You haven't created the pictures yet.`;
                return;
            }

            if (!images || images.length === 0) {
                resolve([]);
                document.getElementById('id_profile_total_images').innerText = `You haven't created the pictures yet.`;
                return;
            }

            document.getElementById('id_profile_total_images').innerText = `Has created ${images.length} photos`;
            /*
            {
    "id": 3,
    "uid": "239",
    "project_id": "3",
    "platform": "",
    "create_at": "1753356623625",
    "create_at_format": "2025-07-24 19:30:23:625",
    "update_at": "1753356623625",
    "update_at_format": "2025-07-24 19:30:23:625",
    "my_tag": "",
    "my_type": "",
    "hidden": "",
    "task_id": "",
    "action": "",
    "status": "1",
    "fail_reason": "",
    "start_time": "",
    "finish_time": "",
    "video_prompt": "Cinematic, documentary-style video. A group of massive, heavily bearded Viking warriors, clad in leather, fur, and horned helmets, wander through a brightly lit, modern IKEA store. They look utterly bewildered and out of place.\nDynamic shots: One Viking tries to decipher the assembly instructions for a \"BILLY\" bookcase as if it were an ancient runestone. Another tests the durability of a \"POÄNG\" armchair by cautiously sitting in it, causing it to creak alarmingly. A third, massive Viking stands in the kitchen section, fascinated by a refrigerator's automatic ice dispenser, catching ice cubes in his helmet with childlike wonder.\nThe climax is them discovering the IKEA food court. They bypass the meatballs and instead try to pay for a hotdog with a single, large, ancient gold coin, causing chaos at the register. The scene is shot with a slightly comedic, Wes Anderson-style symmetry.\nAudio: The distant, sterile hum of the department store, mixed with the Vikings' deep, guttural Old Norse whispers, the clanking of their gear, and a quirky, upbeat instrumental track.",
    "video_title": "视频名称",
    "video_tags": "",
    "video_desc": "",
    "video_platform": "",
    "video_model": "veo3-fast",
    "video_negative_prompt": "",
    "video_duration": "",
    "video_url": "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/239/video_3_1753356623625_original.video/mp4",
    "video_template": "",
    "video_ratio": "",
    "video_cfg_scale": "",
    "ext0": "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/239/image_239_1753356623625_original.jpg",
    "ext1": "",
    "ext2": "",
    "local_total_page": 1,
    "code": 0,
    "msg": ""
}
            */
            // 转换数据格式以匹配现有的展示逻辑
            const formattedImages = images.map(image => ({
                id: image.id || Math.random().toString(36).substr(2, 9),
                imageUrl: image.ext0, // 使用原图
                generatedUrl: image.video_url, // 生成的图片
                title: image.video_title,
                description: image.video_desc,
                createTime: image.created_at || new Date().toLocaleString(),
                status: image.status // 0: 生成中 1: 成功 2: 失败
            }));

            resolve(formattedImages);
        });
    });
}

// 创建图片卡片HTML
function createImageCard(image) {
    console.log("开始循环创建视频卡片: ", image);
    return `
        <div class="image-card bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden group cursor-pointer"
             onclick="window.open('${image.generatedUrl}', '_blank')">
            <div class="relative aspect-w-4 aspect-h-3">
                <video 
                    src="${image.generatedUrl}" 
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    preload="metadata"
                    muted
                    onmouseover="this.play()"
                    onmouseout="this.pause(); this.currentTime=0;">
                </video>
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="play-button w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"></path>
                        </svg>
                    </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path>
                        </svg>
                        <span class="text-xs text-white">点击播放</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}
                // <div class="absolute bottom-3 left-3 right-3">
                //     <div class="flex justify-between items-end">
                //         <p class="text-sm text-white/90">${image.created_at || new Date().toLocaleString()}</p>
                //     </div>
                // </div>
// 初始化页面
async function initializePage() {
    const imageGrid = document.getElementById('image-grid');
    const loadingState = document.getElementById('loading-state');
    const emptyState = document.getElementById('empty-state');

    // 显示加载状态
    loadingState.classList.remove('hidden');
    imageGrid.classList.add('hidden');
    emptyState.classList.add('hidden');

    try {
        const images = await fetchImages();
        
        // 隐藏加载状态
        loadingState.classList.add('hidden');
        
        // 如果没有图片数据，显示空状态
        if (images.length === 0) {
            emptyState.classList.remove('hidden');
            imageGrid.classList.add('hidden');
            return;
        }

        // 显示图片
        imageGrid.classList.remove('hidden');
        imageGrid.innerHTML = images.map(image => createImageCard(image)).join('');
    } catch (error) {
        console.error('Failed to load images:', error);
        loadingState.classList.add('hidden');
        // 可以添加错误状态的显示
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializePage); 