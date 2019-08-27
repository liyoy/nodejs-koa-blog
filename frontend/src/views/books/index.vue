<template>
  <section class="books">
    <ul class="books-box">
      <li class="books-item" v-for="item in 8">
        <div class="books-cover">
          <img v-if="Math.random() > 0.4" src="https://img2.mukewang.com/szimg/59b8a486000107fb05400300-360-202.jpg"
               alt="cover">
          <img v-else src="https://img4.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg" alt="cover">
        </div>
        <section class="books-detail">
          <h1 class="books-name">
            <i class="el-icon-books-play"></i>
            编程必备基础知识 计算机组成原理+操作系统编程必备基础知识
          </h1>
          <div class="books-introduce">
            编程必备基础知识 计算机组成原理+操作系统编程必备基础知识，编程必备基础知识 计算机组成原理+操作系统编程必备基础知识，编程必备基础知识 计算机组成原理+操作系统编程必备基础知识
          </div>
          <div class="books-intro">
            <span class="article-author"><i class="icon el-icon-user"></i> 梁凤波</span>
            <span class="article-browse"><i class="icon el-icon-view"></i> 100</span>
            <span class="article-browse"><i class="icon el-icon-chat-dot-round"></i> 22</span>
            <span class="article-create-at"><i class="icon el-icon-time"></i> 2019-08-27</span>
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
  .books {
    max-width: 1280px;
    margin: 24px auto;
    padding: 0 24px;
  }

  .books-header {
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    color: #404040;
    margin: 42px 0;
  }

  .books-item {
    padding: 24px;
    display: flex;
    cursor: pointer;
    margin-bottom: 42px;
    border-radius: 8px;
    overflow: hidden;
    background: white;

    &:hover {
      box-shadow: 8px 8px 8px #f0f0f0;
    }
  }

  .books-cover {
    margin-right: 24px;
    width: 480px;

    & img {
      width: 100%;
      border-radius: 5px;
    }
  }


  .books-name {
    color: #464c5b;
    line-height: 42px;
    font-weight: bold;
    font-size: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .books-introduce {
    font-size: 18px;
    color: #989898;
    line-height: 32px;
    margin: 16px 0;
  }

  .books-intro {
    display: flex;
    font-size: 16px;

    & span {
      color: #9ea7b4;
      margin-right: 24px;
      display: flex;
      align-items: center;
      white-space: nowrap;
    }
  }

</style>
