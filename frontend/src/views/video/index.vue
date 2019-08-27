<template>
  <section class="video">
    <ul class="video-box">
      <li class="video-item" v-for="item in 8">
        <div class="video-cover">
          <img v-if="Math.random() > 0.4" src="https://img.mukewang.com/5d50d40b0001636518720632.jpg" alt="cover">
          <img v-else src="https://img.mukewang.com/5d6497e6000185b718720632.jpg" alt="cover">
        </div>
        <section class="video-detail">
          <h1 class="video-name">
            <i class="el-icon-video-play"></i>
            编程必备基础知识 计算机组成原理+操作系统编程必备基础知识
          </h1>
          <div class="video-introduce">
            编程必备基础知识 计算机组成原理+操作系统编程必备基础知识，编程必备基础知识 计算机组成原理+操作系统编程必备基础知识，编程必备基础知识 计算机组成原理+操作系统编程必备基础知识
          </div>
          <div class="video-intro">
            <span><i class="icon el-icon-user"></i> 梁凤波</span>
            <span><i class="icon el-icon-view"></i> 99</span>
          </div>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "index.vue"
  }
</script>

<style scoped lang="scss">
  .video {
    max-width: 1280px;
    margin: 42px auto 24px;
    padding: 0 24px;
  }

  .video-header {
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    color: #404040;
    margin: 42px 0;
  }


  .video-detail {
    padding: 24px;
  }

  .video-item {
    cursor: pointer;
    margin-bottom: 42px;
    border-radius: 8px;
    overflow: hidden;
    background: white;

    &:hover {
      box-shadow: 8px 8px 8px #f0f0f0;
    }
  }


  .video-cover {
    & img {
      width: 100%;
    }
  }


  .video-name {
    color: #464c5b;
    line-height: 42px;
    margin: 16px 0;
    font-weight: bold;
    font-size: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .video-introduce {
    font-size: 20px;
    color: #989898;
    line-height: 32px;
    margin: 16px 0;
  }

  .video-intro {
    display: flex;
    font-size: 18px;

    & span {
      color: #9ea7b4;
      margin-right: 24px;
      display: flex;
      align-items: center;
      white-space: nowrap;
    }
  }

</style>
