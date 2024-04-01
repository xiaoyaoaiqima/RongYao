<template>
  <div id="good">
    <div class="GlobalHeader_home">
      <GlobalHeader_home/>
    </div>
    <div class="header">
      <p>
        荣耀踏春出游季，每晚20:00付款抢返现名额，春日挚礼1元抢千元券包，
        <span>
      <a href="/shop" style="color:peachpuff">立即前往抢购</a>
      </span>
      </p>
    </div>
    <div class="hero1">
      <p style="font-size: 80px;margin-bottom: 20px">
        www.honor.com
      </p>
      <p style="font-size: 60px;margin-top: 20px;margin-bottom: 40px">
        荣耀全新域名上线
      </p>
      <el-button style="border-radius: 10px;height: 30px;margin-bottom: 50px">
        <p style="font-size: 16px">
          百万好礼回馈
        </p>

      </el-button>
      <p class="kv-note" style="font-size: 14px;font-weight: lighter;margin-left: 1500px">
        *详情请以荣耀商城活动页为准。
      </p>
    </div>
    <div class="hero2">
      <div style="margin-left: 1300px;margin-bottom: 300px">
        <p style="font-size: 36px;margin-bottom: 5px">
          荣耀Magic6 至臻版
        </p>
        <p style="font-size: 24px;margin-top:5px;margin-bottom: 10px">
          致 未 来
        </p>
        <p> <span style="color: blueviolet">
          ¥6999</span>起
        </p>
      </div>

    </div>
    <div class="hero3">
      <div style="margin-left: 800px;margin-bottom: 300px">
        <p style="font-size: 48px;margin-bottom: 5px">
          HONOR 100 系列
        </p>
        <p style="font-size: 24px;margin-bottom: 5px;margin-top: 5px">
          美，满分上镜
        </p>
        <p>
          <a href="#" style="color: #68BEFF">加赠体脂秤</a>
        </p>
        <el-button-group>
          <el-button type="primary" style="border-radius: 10px;margin-right: 5px">
            购买
          </el-button>
          <el-button text style="border-radius: 10px">
            了解更多 >
          </el-button>
        </el-button-group>

      </div>

    </div>
  </div>
</template>

<script setup>

import GlobalHeader_home from "@/components/GlobalHeader_home.vue";

</script>
<style scoped>
.header{
  margin-top: 25px;
  text-align: center;
  height: 36px;
  background-color: black;

}
.header p{
  color:azure;
}
.hero1 {
  height: 600px;
  margin-right: 100px;
  margin-left: 100px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  align-content: center;
  background: linear-gradient(#0000FF, #FFFFFF);
}
.hero2 {
  height: 600px;
  margin-right: 100px;
  margin-left: 100px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  align-content: center;
  background: url("../../assets/hero2.jpg");
  background-size: cover;

}
.hero3 {
  height: 600px;
  margin-right: 100px;
  margin-left: 100px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  align-content: center;
  background: url("../../assets/hero3.jpg") no-repeat;
  background-size: contain;
}


</style>
