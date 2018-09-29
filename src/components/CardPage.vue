<template>
     <div class="page-card">
        <img class="promise-card" v-if="cardSrc" :src="cardSrc"/>
        <canvas class="canvas" ref="canvas"></canvas>
        <img v-once :src="imgSrc" hidden ref="cardTemplate"/>
        <div v-if="drawDone" class="instruction">&lt;长按保存&gt;</div>
    </div>
</template>

<script>
import drawSvc from "../draw/base.js";
import imgSrc from "../../static/img/promise-card.png";

export default {
  data() {
    return {
      drawDone: false,
      imgSrc: imgSrc,
      cardSrc: ""
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
    async draw(){
      this.cardSrc = await drawSvc.drawCard({
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

.canvas{
  display: block;
  position: absolute;
  width: 1px;
  height: 1px;
  left: 0;
  top: 0;
  opacity: 0;
}

.promise-card{
  display: block;
  position: absolute;
  z-index: 0;
  margin-top: 20vw;
  width: 80vw;
  /* height: 120vw; */
}

.instruction{
  display: block;
  position: absolute;
  left: 54vw;
  top: 136vw;
  color: #999;
  font-size: 2.1vw;
  pointer-events: none; 
}
</style>
