<template>
  <!-- 列表 导航 -->
  <div style="display: flex; justify-content: center;">
    <ul class="horizontal-list">
      <li>
        <a href="https://www.hihonor.com/cn/shop/notice-list" target="_blank">
          <div class="p-img">
            <img class="img0"
                 src="https://hshop.honorfile.com/pimages//pages/squaredInfo/69180745730714708196.png"
                 alt="商城公告">
          </div>
          <div class="p-dec">商城公告</div>
        </a>
      </li>
      <li>
        <a href="https://www.hihonor.com/cn/shop/privilege" target="_blank">
          <div class="p-img">
            <img class="img1"
                 src="https://hshop.honorfile.com/pimages//pages/squaredInfo/84114645730714641148.png"
                 alt="会员领券">
          </div>
          <div class="p-dec">会员领券</div>
        </a>
      </li>
      <li>
        <a href="https://www.hihonor.com/cn/sale/welcome.html" target="_blank">
          <div class="p-img">
            <img class="img2"
                 src="https://hshop.honorfile.com/pimages//pages/squaredInfo/90975645730714657909.png"
                 alt="新人福利">
          </div>
          <div class="p-dec">新人福利</div>
        </a>
      </li>
      <li>
        <a href="https://company.hihonor.com/cn#/" target="_blank">
          <div class="p-img">
            <img class="img3"
                 src="https://hshop.honorfile.com/pimages//pages/squaredInfo/62596645730714669526.png"
                 alt="企业特惠">
          </div>
          <div class="p-dec">企业特惠</div>
        </a>
      </li>
      <li>
        <a href="https://www.hihonor.com/cn/shop/recycler/route" target="_blank">
          <div class="p-img">
            <img class="img4"
                 src="https://hshop.honorfile.com/pimages//pages/squaredInfo/48102208290710220184.png"
                 alt="以旧换新">
          </div>
          <div class="p-dec">以旧换新</div>
        </a>
      </li>
      <li>
        <a href="https://www.hihonor.com/cn/shop/priority" target="_blank">
          <div class="p-img">
            <img class="img5"
                 src="https://hshop.honorfile.com/pimages//pages/squaredInfo/70838645730714683807.png"
                 alt="优购码">
          </div>
          <div class="p-dec">优购码</div>
        </a>
      </li>
      <li>
        <a href="https://www.hihonor.com/cn/shop/order/tcsProductIndex" target="_blank">
          <div class="p-img">
            <img class="img6"
                 src="https://hshop.honorfile.com/pimages//pages/squaredInfo/32969645730714696923.png"
                 alt="补购保障">
          </div>
          <div class="p-dec">补购保障</div>
        </a>
      </li>
    </ul>
  </div>

</template>

<style scoped>


.hotSelling_pic a:nth-child(1) {
  grid-row: span 2;
  grid-column: span 2;
}

.hotSelling_pic a:nth-child(n+2) {
  grid-row: span 1;
  grid-column: span 1;
}

.hotSelling h2 {
  margin-bottom: 10px;
}


ul li {
  align-items: center;
  text-align: center;

}

.p-img {
  margin-right: 50px;
}

.p-dec {
  margin-right: 50px;
}

a {
  text-decoration: none;
  color: black;
}

.horizontal-list {
  display: flex;
  list-style: none;
  padding: 0;
}

.horizontal-list li {
  margin-right: 10px;
}
</style>
