// ===== 粥二婶潮汕大排档 交互脚本 =====

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 0,
                behavior: 'smooth'
            });
        }
    });
});

console.log('🥣 粥二婶潮汕大排档 · 潍坊高新区蓉花里 · 生滚粥 · 啫啫煲 · 潮州鱼生');