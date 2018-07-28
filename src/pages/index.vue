<template>
  <div class="page">
    <div>
      <img src="../assets/Bitmap.png" class="img-r">
    </div>
    <div style='background:#fff;padding-top:1rem;'>
      <div class="t-center t-lg">超职课程</div>
      <div class='swipe-box' style='height:52vh;'>
        <div class="iconfont icon-back"></div>
        <div class="iconfont icon-right"></div>
        <mt-swipe :showIndicators='false'>
          <mt-swipe-item>
            <div style='padding:1rem 2rem;'>
              <div class="t-center mb-10">
                <img src='http://www.chaozhiedu.com/static/images/Bitmap1.png' style='width:60vw;'>
              </div>
              <div>
                <div class="t-center t-md mb-10">
                  ACI国际心理咨询师
                </div>
                <div class="t-gray t-sm">
                  教育部规定每个学校必须配备心理咨询师、中小学增设心理课外辅导一些灾难事件也需要更多心理咨询师加入安慰家属服务行列，如汶川地震、马航失踪……
                </div>
              </div>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div style='padding:1rem 2rem;'>
              <div class="t-center mb-10">
                <img src='http://www.chaozhiedu.com/static/images/Bitmap2.png' style='width:60vw;'>
              </div>
              <div>
                <div class="t-center t-md mb-10">
                  经济师
                </div>
                <div class="t-gray t-sm">
                  2018年经济师报考条件：凡中华人民共和国公民、遵守国家法律法规、恪守职业道德、并具备下列条件的，可申请参加初/中级经济师考试
                </div>
              </div>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div style='padding:1rem 2rem;'>
              <div class="t-center mb-10">
                <img src='http://www.chaozhiedu.com/static/images/Bitmap3.png' style='width:60vw;'>
              </div>
              <div>
                <div class="t-center t-md mb-10">
                  人力资源管理师
                </div>
                <div class="t-gray t-sm">
                  尽快考人力资源师证书，错过本次考试，将延误至少半年，甚至是一辈子
                </div>
              </div>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div style='padding:1rem 2rem;'>
              <div class="t-center mb-10">
                <img src='http://www.chaozhiedu.com/static/images/Bitmap4.png' style='width:60vw;'>
              </div>
              <div>
                <div class="t-center t-md mb-10">
                  营养师
                </div>
                <div class="t-gray t-sm">
                  通常只涉及教学大纲，并不会通过条框教材进行限定 。课程是由ACI授权 讲师根据教学大纲设置课程内容和考核方式
                </div>
              </div>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="t-center t-xs" style='padding:.5rem;background:#f3f3f3;'>
      <div class="t-md mb-10">注册国际心理咨询师证书</div>
      <div class="t-lg mb-10">六大优势</div>
      <div class="mb-20">
        <img src="../assets/star.png" class="img-r" style='padding:0 20vw;' alt="" srcset="">
      </div>
      <div flex>
        <div flex-box="1">
          <img style="width:40vw;" src='../assets/images/Group11.png'>
          <p>高级专业人才储备</p>
        </div>
        <div flex-box="1">
          <img style="width:40vw;" src='../assets/images/Group19.png'>
          <p>人才评定、海外人才库</p>
        </div>
      </div>
      <div flex>
        <div flex-box="1">
          <img style="width:40vw;" src='../assets/images/Group20.png'>
          <p>
            任职资格 升职加薪
          </p>
        </div>
        <div flex-box="1">
          <img style="width:40vw;" src='../assets/images/Group21.png'>
          <p>
              专业人才缺口60万
          </p>
        </div>
      </div>
      <div flex>
        <div flex-box="1">
          <img style="width:40vw;" src='../assets/images/Group22.png'>
          <p>
            全球通用"求职绿卡"
          </p>
        </div>
        <div flex-box="1">
          <img style="width:40vw;" src='../assets/images/Group23.png'>
          <p>
              全球163个WTO成员国认可
          </p>
        </div>
      </div>
    </div>
    <div style='background:#fff;padding:.5rem 0;'>
        <div class="t-center t-lg">
          ACI国际心理咨询师名师介绍
        </div>
        <div class='teachers'>
          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='http://www.chaozhiedu.com/static/images/%E9%83%AD%E8%81%AA%E8%8D%A3.png'>
                <p style='color:#029EFF' class="t-md">郭聪荣</p>
                <p class="t-sm t-left" style='white-space: normal;'>
                  心理学硕士，心理专家。 北京中医药大学心理讲师，共青团心理辅导员培训与督导师</p>
            </div>
          </div>
           <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='http://www.chaozhiedu.com/static/images/%E7%8E%8B%E6%B5%B7%E7%87%95.png'>
                <p style='color:#029EFF' class="t-md">王海燕</p>
                <p class="t-sm" style='white-space: normal;'>
                  心理学硕士，心理治疗师，北大医院心理医生</p>
            </div>
          </div>
           <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='http://www.chaozhiedu.com/static/images/%E9%83%91%E6%B5%B7%E8%8B%B1.png'>
                <p style='color:#029EFF' class="t-md">郑海英</p>
                <p class="t-sm" style='white-space: normal;'>
                  硕士研究生，国家二级心理咨询师，华北理工大学心理学院教师，华北理工大学附属医院心理科心理咨询师</p>
            </div>
          </div>
           <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='http://www.chaozhiedu.com/static/images/%E6%A0%91%E5%BF%83.png'>
                <p style='color:#029EFF' class="t-md">树心</p>
                <p class="t-sm" style='white-space: normal;'>
                  心理学硕士，国内实力派咨询专家，二级心理咨询师</p>
            </div>
          </div>
          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='http://www.chaozhiedu.com/static/images/%E6%9E%9C%E6%9E%9C.png'>
                <p style='color:#029EFF' class="t-md">果果</p>
                <p class="t-sm" style='white-space: normal;'>
                  心理学硕士，心理治疗师</p>
            </div>
          </div>
        </div>
    </div>
    <div style='background:#fff;'>
      <div class="t-center t-lg mb-20">
        关于超职
      </div>
      <div>
        <img src='../assets/images/Group17.png' class="img-r" style='padding-right:10vw;'>
      </div>
      <div style='padding:1rem;' class="t-sm">
        <p>超职网—超职时代（北京）教育科技有限公司打造的综合性考试培训网站，致力于提供快乐、高效、超值的课程体验，课程推出至今，高质量与好口碑是我们的核心发展前提，在师资建设方面，我们不断完善，加强与学员的情感联系，努力为学员提供最便利、最享受、最信任的学习体验课程。</p>
        <p>超职网集职业教育类、财会类、学历教育类、建筑工程类、教师资格证类等多领域五大体系课程于一体，“精益求精”是超职的核心理念，在职业教育类和学历教育类已取得了高于行业内平均通过率的骄人成绩，在财会类、学历教育类、建筑工程类、教师资格证类获得了行业内的认可和学员的一致好评，但我们不止于此，未来，超职将为更多的追梦人，提供多元化、专业化、人性化的教学课程体系。</p>
      </div>
      <div style='padding: 0 1rem 1rem;'>
        <div flex class="mb-10">
          <div flex-box="0">
            <div class="t-center mr-10" style='background:#fd1;color:#666;height:2rem;width:2rem;border-radius:2rem;line-height:2rem;'>01</div>
          </div>
          <div flex-box="1">
            <div style='color:#56509F;'>互动教学</div>
            <div class="t-xs">专业团队悉心打造的优质课程内容，精心设计的教学环节，科学有效</div>
          </div>
        </div>
        <div flex class="mb-10">
          <div flex-box="0">
<div class="t-center mr-10" style='background:#fd1;color:#666;height:2rem;width:2rem;border-radius:2rem;line-height:2rem;'>02</div>
          </div>
          <div flex-box="1">
            <div style='color:#56509F;'>智能题库</div>
            <div class="t-xs">根据学习效果智能匹配训练，巩固学习成果。</div>
          </div>
        </div>
        <div flex class="mb-10">
          <div flex-box="0">
<div class="t-center mr-10" style='background:#fd1;color:#666;height:2rem;width:2rem;border-radius:2rem;line-height:2rem;'>03</div>
          </div>
          <div flex-box="1">
            <div style='color:#56509F;'>社交服务</div>
            <div class="t-xs">贴心的班主任、助教团队全天候贴心答疑，解决各类学习问题。</div>
          </div>
        </div>
        <div flex class="mb-10">
          <div flex-box="0">
<div class="t-center mr-10" style='background:#fd1;color:#666;height:2rem;width:2rem;border-radius:2rem;line-height:2rem;'>04</div>
          </div>
          <div flex-box="1">
            <div style='color:#56509F;'>互动小组</div>
            <div class="t-xs">同窗好友一起聊天学习，共同督促，共同成长</div>
          </div>
        </div>
      </div>
      
    </div>
    <div style='background:#f4f4f4;padding:1rem .5rem;'>
      <div class="t-center t-lg mb-10">
         选择超职，选择未来
      </div>
      <div class="mb-10">
        <img src='../assets/men.png' class="img-r">
      </div>
      <div class="t-sm t-center mb-10" style='background:#FE741A;color:#fff;padding:.5rem;'>
        5A级专业老师，在超职网，老师就是核心关键！
      </div>
      <div class="t-xs" style='background:#fff;border-radius:10px;padding:.1rem .5rem;'>
        <p>你还愿意再接受照本宣科的老师吗？你还愿意接收学术平庸责任心差的老师吗？</p>
        <p>在超职网，对老师层层把关，保留5A教学质量且</p>
        <p>具有能力、经验、责任心的教师！</p>
      </div>
    </div>
    <div class="t-center" style='padding:1rem;background:#fff;'>
      <div class="t-center t-lg mb-10">
         联系我们-超职网
      </div>
      <div class="mb-10 t-md">
          <img src="../assets/images/tel.png" class="v-top" style='height:24px;'> 010-51657777
      </div>
      <div class="mb-10 t-md" style='color:#f40;'>
        “超职教育”微信公众号
      </div>
      <div>
        <img style='width:40vw;' src='../assets/images/12321519284307_.pic.jpg'>
        <div class="t-xs">点击保存到手机</div>
      </div>
    </div>
    <div class="t-xs t-center" style='padding:.5rem;background:#444;color:#fff;'>
      <div>©-2017 超职时代（北京）教育科技有限公司 版权所有</div>
      <div>京ICP备17033346号</div>
      <div>北京市海淀区地锦路7号院14号楼五层</div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // let { env } = this.$router.query;
    // if(env){
    // }
  }
};
</script>
<style lang="less" scoped>
.page {
  margin: 0 0 50px;
}
.teachers {
  overflow: auto;
  width: 100vw;
  white-space: nowrap;
  padding: 0.5rem;
  box-sizing: border-box;
}

.teacher-item {
  vertical-align: top;
  display: inline-block;
  width: 50vw;
  margin: 0.5rem;
}
.teacher-item-content {
  border: 4px solid #afe0ff;
  padding: 0.5rem;
  border-radius: 10px;
  height: 46vh;
}

.swipe-box {
  position: relative;
  .iconfont {
    position: absolute;
    top: 3rem;
    font-size: 2rem;
    color: #ccc;
  }
  .icon-right {
    right: 0;
  }
}
</style>
