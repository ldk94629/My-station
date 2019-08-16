<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in lunboList" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt />
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="../../image/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
             <img src="../../image/menu2.png" alt="">
            <span class="mui-badge">5</span>
      
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
             <img src="../../image/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
             <img src="../../image/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="../../image/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
             <img src="../../image/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getLunBo();
  },
  methods: {
    getLunBo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          console.log(12333);
          console.log(result.body);
          if (result.body.status === 0) {
            this.lunboList = result.body.message;
            console.log(this.lunboList);
          } else {
            Toast("加载轮播图失败");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background: red;
    }
    &:nth-child(2) {
      background: rebeccapurple;
    }
    &:nth-child(3) {
      background: rosybrown;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9{
    background-color:#FFF;
    border: none;
 .mui-table-view-cell{
        border:0px;
    }
    img{
        width:60px;
        height:60px;
       
    }
.mui-table-view-cell{
   font-size:13px;
}
}
</style>