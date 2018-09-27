<template>
    <div class="page-input">
        <form @submit="formSubmit">
            <input name="name"/>
            <input name="phone"/>
            <select name="job" id="">
                <option v-for="(job, index) in jobList" :key="index" :value="job">{{job}}</option>
            </select>
            <!-- 立即生成承诺书 -->
            <button class="submit" type="submit"></button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      jobList: [
        '网络建设岗',
        '一线服务岗',
        '服务支撑岗',
        '市场营销岗',
        '行政服务岗'
      ]
    }
  },
  methods: {
    formSubmit (ev) {
      let form = ev.target
      let name = form.name.value
      let phone = form.phone.value
      let job = form.job.value
      this.$router.push({
        name: 'card',
        params: {
          name, phone, job
        }
      })
      ev.preventDefault()
    }
  }
}
</script>

<style>
.page-input {
  display: flex;
  justify-content: center;
}
form {
  margin-top: 83.8vw;
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input,
select,
button {
  height: 7.8vw;
  width: 47.5vw;
  margin-left: 12.5vw;
  padding-left: 2vw;
  box-sizing: border-box;
  margin-bottom: 3.6vw;
  background: transparent;
  border: none;
}

input {
  /* border: 1px red solid; */
}
select {
  appearance: none;
}

button.submit {
  margin-top: 0.5vw;
  height: 8.2vw;
  margin-left: 0;
  width: 60vw;
  border: none;
}
</style>
