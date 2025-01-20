// 获取所有的ribbon项
const ribbon = document.querySelector('.ribbon');
const items = document.querySelectorAll('.ribbon-block');

let itemWidth = items[0]?items[0].offsetWidth:0; // 获取每个条目的宽度
let totalWidth = itemWidth * items.length; // 所有条目的总宽度

// 控制平移函数
let currentPosition = 0;  // 当前平移的位置

function moveRibbon() {
  // 向左平移100%
  currentPosition -= itemWidth; // 每次平移一个条目的宽度

  // 如果平移到了最后一个条目，重置回初始位置
  if (Math.abs(currentPosition) >= totalWidth) {
    currentPosition = 0;
  }

  // 触发浏览器重绘以应用 transform
  requestAnimationFrame(() => {
    // 设置平移位置
    ribbon.style.transform = `translateX(${currentPosition}px)`;

    // 清理动画样式
    ribbon.addEventListener(
      'transitionend',
      () => {
        // 每个条目停留 5 秒
        setTimeout(moveRibbon, 5000);
      },
      { once: true },
    );
  });
}

// 处理窗口大小变化
function updateRibbonDimensions() {
  // 更新条目宽度和总宽度
  itemWidth = items[0] ? items[0].offsetWidth : 0;
  totalWidth = itemWidth * items.length;

  // 确保当前平移位置不会超出新宽度的范围
  currentPosition = Math.min(currentPosition, 0);
  ribbon.style.transform = `translateX(${currentPosition}px)`;
}

// 添加窗口大小变化的事件监听
window.addEventListener('resize', updateRibbonDimensions);

// 启动动画
moveRibbon();

