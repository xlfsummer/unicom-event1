/**
 * @typedef {object} drawOption
 * @property {HTMLImageElement} background
 * @property {HTMLCanvasElement} canvas
 * @property {object} info
 * @property {string} info.name
 * @property {string} info.phone
 * @property {string} info.job
 */


/** @param {drawOption} canvas*/
function setCanvasSize({ canvas, background, info }) {
    let imgRatio = background.naturalWidth / background.naturalHeight;
    let W = canvas.getBoundingClientRect().width;
    canvas.width = Math.ceil(W);
    let H = canvas.height = Math.ceil(W / imgRatio);
    canvas.style.height = H/window.innerWidth * 100 + "vw"
}

/**
 * 绘制承诺卡
 * @param {drawOption} option
 */
function drawCard({ canvas, background, info }) {
    setCanvasSize(...arguments);
    let p = percent => getPercentLength(canvas.width, percent);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#2070d0"
    ctx.font = "bold 3vw 'Microsoft Yahei'"
    ctx.fillText(info.job,   p(38),   p(45.5));
    ctx.fillText(info.name,  p(62.5), p(45.5));
    ctx.fillText(info.phone, p(28),   p(52));

    ctx.font = "bold 4vw 'Microsoft Yahei'"
    ctx.fillStyle = "black"
    ctx.fillText(info.name,  p(71), p(142.5));
}

function getPercentLength(length, percent){
    return length * percent / 100;
}


export default {
    setCanvasSize,
    drawCard
};
