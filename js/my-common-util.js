
class ClickUtil {
  /**
   * 添加点击事件
   * @param {string} elementId - 元素ID
   * @param {Function} callback - 点击回调函数
   */
  static onClick(elementId, callback) {
      const element = document.getElementById(elementId);
      if (element) {
          element.addEventListener('click', callback);
      } else {
          console.error(`[ClickUtil] 未找到ID为"${elementId}"的元素`);
      }
  }
}

/**
 * 全局配置类
 * 用于存储项目中使用的全局静态变量
 */
class GlobalConfig {
    // 项目相关配置
    static project_id = "3";
    static product_id = "9";
    static default_model = "veo3-fast";
    // static url = 'https://linkprohub.top';
    static url = 'http://localhost:39603';

    // 图片生成类型
    static API_NANO = "/go/generate_nano_image"
    static API_FLUX = "/go/kon_create"
    static API_GET_TASK_DETAIL = "/go/v/get_task_detail"
    
    static TYPE_IMAGE_NANO = "0";   // 图片生成类型 nona
    static TYPE_IMAGE_FLUX = "1";   // 图片生成类型 flux


    static TYPE_VIDEO_VIDU_IMAGE_TO_VIDEO = "2";
    static TYPE_VIDEO_VIDU_TEXT_TO_VIDEO = "3";


}



