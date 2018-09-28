<template>
     <div class="page-card">
        <canvas id="canvas" ref="canvas"></canvas>
        <img src="/static/img/promise-card.png" hidden ref="cardTemplate"/>
        <div v-if="drawDone" class="instruction">&lt;长按保存你的承诺书&gt;</div>
    </div>
</template>

<script>
import drawSvc from "../draw/base.js";

export default {
  data() {
    return {
      drawDone: false
    };
  },
  created() {
  },
  async mounted(){
    // 等待图片加载完成并绘制
    /** @type {HTMLImageElement} */
    let img = this.$refs.cardTemplate;
    img.complete
    ? this.draw()
    : img.onload = _ => this.draw();
  },
  methods: {
    draw(){
      drawSvc.drawCard({
        background: this.$refs.cardTemplate,
        canvas: this.$refs.canvas,
        info: this.$route.query
      })
      this.drawDone = true
    }
  }
};
</script>

<style>
.page-card{
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}
#canvas{
  display: block;
  margin-top: 20vw;
  width: 80vw;
  /* height: 120vw; */
}

.instruction{
  display: block;
  position: absolute;
  left: 55vw;
  top: 136vw;
  color: #999;
  font-size: 2.1vw;
}
</style>
