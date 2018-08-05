<template>
  <div class="page home-page">
    <div>
      <img src="../assets/Bitmap.png" class="img-r">
    </div>
    <div style='background:#fff;padding-top:1rem;'>
      <div class="t-center t-lg">超职课程</div>
      <div class='swipe-box' style='height:60vh;'>
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
                  学历提升
                </div>
                <div class="t-gray t-sm">
                  本科就业率平均为93.4%，专科就业率平均为为87.3%。机会很多，但你是否具有足够的“硬实力”，不要让学历成为阻碍你获得成功的绊脚石，高学历是你面对竞争的不二法宝，我们致力于为低学历者提供更优良、高效的学习方式。
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
    <div class="t-center t-xs floor-3">
      <div class="floor-body">
        <div class="advantage">
            <div class="advantage-title">学历的优势</div>
            <ul class="advantage-list">
                <li>
                    <span>晋升加薪、职称评定</span>
                </li>
                <li>
                    <span>考资格证、考公务员、出国留学</span>
                </li>
                <li>
                    <span>拓展、优化朋友圈</span>
                </li>
                <li>
                    <span>全国通用“求职绿卡”</span>
                </li>
                <li>
                    <span>985/211院校毕业</span>
                </li>
                <li>
                    <span>发展专业水平，贴切职业要求</span>
                </li>
            </ul>
        </div>
        <div class="advantage">
            <div class="advantage-title">心理资格证的优势</div>
            <ul class="advantage-list">
                <li>
                    <span>考取职业资格证</span>
                </li>
                <li>
                    <span>加强个人职业竞争力</span>
                </li>
                <li>
                    <span>学习专业知识，获得留学资格</span>
                </li>
                <li>
                    <span>解决高压下的自身和他人心理问题</span>
                </li>
                <li>
                    <span>填补国内心理咨询岗位空缺</span>
                </li>
                <li>
                    <span>职称评定、升职加薪</span>
                </li>
            </ul>
        </div>
      </div>
    </div>
    <div style='background:#fff;padding:.5rem 0;'>
        <div class="t-center t-lg">
          超职金牌讲师介绍
        </div>
        <div class='teachers'>
          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/e1.png'>
                <p style='color:#029EFF' class="t-md">郭聪荣</p>
                <p class="t-sm t-left" style='white-space: normal;'>
                  心理学硕士，心理专家。 北京中医药大学心理讲师，共青团心理辅导员培训与督导师</p>
            </div>
          </div>
           <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/e2.png'>
                <p style='color:#029EFF' class="t-md">王海燕</p>
                <p class="t-sm" style='white-space: normal;'>
                  心理学硕士，心理治疗师，北大医院心理医生</p>
            </div>
          </div>
           <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/e3.png'>
                <p style='color:#029EFF' class="t-md">郑海英</p>
                <p class="t-sm" style='white-space: normal;'>
                  硕士研究生，国家二级心理咨询师，华北理工大学心理学院教师，华北理工大学附属医院心理科心理咨询师</p>
            </div>
          </div>
           <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/e4.png'>
                <p style='color:#029EFF' class="t-md">树心</p>
                <p class="t-sm" style='white-space: normal;'>
                  心理学硕士，国内实力派咨询专家，二级心理咨询师</p>
            </div>
          </div>
          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/e5.png'>
                <p style='color:#029EFF' class="t-md">果果</p>
                <p class="t-sm" style='white-space: normal;'>
                  心理学硕士，心理治疗师</p>
            </div>
          </div>

          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/h1.png'>
                <p style='color:#029EFF' class="t-md">李丛蔚</p>
                <p class="t-sm" style='white-space: normal;'>
                  985消防名校矿业大学博士，某国企工程项目负责人； 国家注册一级消防师、国家注册一二级建造师、中国消防协会会员，是最早进入消防培训的著名讲师之一，长期主讲消防、一二建、工程管理等建筑类课程。</p>
            </div>
          </div>

          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/h2.png'>
                <p style='color:#029EFF' class="t-md">彭伟</p>
                <p class="t-sm" style='white-space: normal;'>
                  博士，副教授，硕士生导师。安徽理工大学能源与安全学院安全工程系副主任。 2003年毕业于中国科学技术大学，获安全工程专业工学学士与电子工程与信息科学理学学士（双学士）；2008年获工学博士学位。 《安徽省人民政府办公厅关于构建“六项机制”强化安全生产风险管控的实施意见》主要起草人之一</p>
            </div>
          </div>

          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/h3.png'>
                <p style='color:#029EFF' class="t-md">焦工</p>
                <p class="t-sm" style='white-space: normal;'>
                  曾任北京银孚国际网校消防综合能力直播主讲老师，西安李建教育消防技术实务面授，北京百加百教育消防工程师签约讲师，北京帮考网网校消防技术实务直播主讲老师等，授课经验丰富，学员好评度高；
                </p>
            </div>
          </div>

          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/h4.png'>
                <p style='color:#029EFF' class="t-md">安慕萍</p>
                <p class="t-sm" style='white-space: normal;'>
                  于1989 年北京工业大学（211大学） 热能工程系毕业。20多年大型会议、展览及大型群众活动消防安全讲师、培训活动等负责人，曾入选会展业全国个人十佳。教学经验丰富，深受学生好评。
                </p>
            </div>
          </div>

          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/h5.png'>
                <p style='color:#029EFF' class="t-md">马国刚</p>
                <p class="t-sm" style='white-space: normal;'>
                  资深讲师，曾在嗨学网、中业教育任消防工程师专业讲师，授课语言通俗易懂，总结性强、重点突出，贴近考试。 针对学员难点提供支持；乐于与学员互动，深受广大学员喜欢。愿与大家携手前行，共创辉煌。
                </p>
            </div>
          </div>

          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/1.png'>
                <p style='color:#029EFF' class="t-md">房孟</p>
                <p class="t-sm" style='white-space: normal;'>
                  985院校硕士研究生，主要研究方向为地方政府改革与治理，承担《政府经济学》、《行政管理学》等专业核心课程的任教。以互动式讲课为主，授课风格条理清晰、课堂气氛轻松，具有热情与活力和一定的感染力。 
                </p>
            </div>
          </div>

          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/2.png'>
                <p style='color:#029EFF' class="t-md">杨佩姿</p>
                <p class="t-sm" style='white-space: normal;'>
                  文学爱好者，211高校本科学历，具有高中语文教师资格证，立志于为人师表，传道授业解惑。
                  授课生动活泼，讲课深入浅出，通俗易懂，深受学生喜爱。
                  “路漫漫其修远兮，吾将上下而求索”愿与学生共同努力，携手进步。 
                </p>
            </div>
          </div>

          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/3.png'>
                <p style='color:#029EFF' class="t-md">梅笳华</p>
                <p class="t-sm" style='white-space: normal;'>
                  毕业于211大学汉语言文学专业，资深讲师，专攻于汉语言文学，文学作品爱好者，授课经验丰富，上课风趣，知识简单明了，讲授清晰易懂，思想清晰明了，讲课深入浅出，课堂深入浅出，带领同学们一起欣赏文学作品。
理想的路总是为有信心的人预备着。。</p>
            </div>
          </div>

          <div class='teacher-item'>
            <div class="t-center teacher-item-content">
                <img style='width:36vw;' src='/static/images/teachers/4.png'>
                <p style='color:#029EFF' class="t-md">王依蕾</p>
                <p class="t-sm" style='white-space: normal;'>
                  资深讲师，毕业于中国人民大学管理学专业。授课语言通俗易懂，总结性强、授课经验丰富。专业知识强悍。条理清晰、富有激情，较强的亲和力和感染力。</p>
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
  margin: 0.25rem;
}
.teacher-item-content {
  border: 4px solid #afe0ff;
  padding: 0.5rem;
  border-radius: 10px;
  height: 50vh;
  overflow:auto;
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

.home-page {
  .floor-3 {
    padding: 1rem 0.5rem 0.5rem;
    background: url("/static/images/20180805211507.png") no-repeat center;
    background-size: auto 100%;
    color: #fff;
  }
}

.advantage {
  width: 300px;
  margin: 0 auto;
  margin-bottom:20px;
}

.advantage-title {
  background: url('/static/images/title.png') no-repeat center;
  color: #fff;
  font-size: 20px;
  margin-bottom: 17px;
  height: 48px;
  line-height: 40px;
}

.advantage-list {
  // width: 300px;
}

.advantage-list li {
  width: 300px;
  height: 50px;
  line-height: 50px;
  background: rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
}
</style>
