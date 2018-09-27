<template>
     <div class="page-card">
        <canvas id="canvas" ref="canvas"></canvas>
    </div>
</template>

<script>
import drawSvc from "../draw/base.js";

export default {
  data() {
    return {

    };
  },
  created() {
  },
  mounted(){
    // 等待图片加载完成并绘制
  
    /** @type {HTMLCanvasElement} */
    let canvas = this.$refs.canvas;
    drawSvc.setCanvasSize(canvas);
    let W = canvas.width;
    let H = canvas.height;
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "#fff";
    ctx.shadowBlur = 4;
    ctx.shadowColor = "black";
    ctx.fillRect(5, 5, W - 10, H - 10);
  }
};
</script>

<style>
.page-card{
  display: flex;
  align-items: center;
  flex-direction: column;
}
#canvas{
  display: block;
  margin-top: 20vw;
  width: 75vw;
  height: 120vw;
}

</style>
