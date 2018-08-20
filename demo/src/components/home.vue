<template>
  <div id="home">
    <div class="topbar">
      <img src="./menu.png" alt="" class="menu">
      <span>今天</span>
      <img src="./notify.png" alt="" class="notify">
      <img src="./more.png" alt="" class="more">
    </div>
    <div class="hot-story">
      <div class="box">
        <div class="item" v-for="item in hotStory">
          <img v-bind:src="item.image" alt="">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="all-story">
      <ul>
        <li v-for="item in allStory">
          <div class="title">
            <span>{{item.title}}</span>
          </div>
          <img :src="item.images[0]">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        hotStory:[],
        allStory:[]
      }
    },
    mounted(){
      axios.get('http://news-at.zhihu.com/api/4/news/latest').then( (rsp) => {
        this.allStory=rsp.data.stories;
        this.hotStory=rsp.data.top_stories;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>
<style scoped>
  .topbar{
    width:100%;
    height:50px;
    background-color: #0b97c4;
    position: relative;
  }
  .topbar img{
    width:30px;
    height:30px;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto 0;
  }
  .topbar .menu{
    left:10px;
  }
  .topbar .notify{
    right:70px;
  }
  .topbar .more{
    right: 10px;
  }
  .topbar span{
    position: absolute;
    font-size: 20px;
    left:60px;
    top:14px;
    color: #fff;
  }
  .hot-story{
    width:100%;
    height:250px;
    background-color: #cccccc;
    position: relative;
    overflow: hidden;
  }
  .hot-story .box{
    width:500%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    animation: loop 30s linear infinite;
  }
  .hot-story .box .item{
    width:20%;
    height:100%;
    float:left;
  }
  @keyframes loop {
    0%,19%,100%{
      transform: translate(0,0);
    }
    20%,39%{
      transform: translate(-20%,0);
    }
    40%,59%{
      transform:translate(-40%,0);
    }
    60%,79%{
      transform:translate(-60%,0);
    }
    80%,99%{
      transform:translate(-80%,0);
    }
  }
  .item img{
    width:100%;
    height:100%;
  }
  .item p{
    width:20%;
    height:40px;
    display:block;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    bottom:0;
    padding-left: 10px;
    padding-top: 20px;
    color: #ffffff;
    font-size: 20px;
  }
  .all-story{
    width:100%;
    margin-top: 10px;
  }
  .all-story ul li{
    width:95%;
    height:80px;
    margin:10px;
    box-shadow: 0 0 10px 0 #808080;
  }
  .all-story ul li .title{
    width:70%;
    height:100%;
    float: left;

  }
  .all-story ul li .title span{
    padding:20px;
    display: block;
  }
  .all-story ul li img{
    width:23%;
    height:70px;
    float: right;
    padding-top:5px;
  }
</style>
