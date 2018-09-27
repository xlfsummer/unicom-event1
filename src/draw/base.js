

export default {
    /** @param {HTMLCanvasElement} canvas*/
    setCanvasSize(canvas){
        let rect = canvas.getBoundingClientRect();
        let {width, height} = rect;
        canvas.width = width;
        canvas.height = height;
    }
}
