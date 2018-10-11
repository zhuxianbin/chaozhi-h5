<template>
  <div>
    <van-cell-group>
      <van-cell title="毕业时间">
        <span class='t-blue'>2019年10月</span>
      </van-cell>
    </van-cell-group>
    <div class="course-list">
      <div class='card'>
        <van-panel title="第一学期" status="+">
          <div class='card-padd'>
            <van-row gutter="20">
              <van-col span="12">
                <van-button type="default" class="mb-10" size="small" block>默认按钮</van-button>
              </van-col>
              <van-col span="12">
                <van-button type="primary" class="mb-10" size="small" block>主要按钮</van-button>
              </van-col>
              <van-col span="12">
                <van-button type="warning" class="mb-10" size="small" block>警告按钮</van-button>
              </van-col>
              <van-col span="12">
                <van-button type="danger" class="mb-10" size="small" block>危险按钮</van-button>
              </van-col>
            </van-row>
          </div>
          <div slot="footer">
            <div class='t-center t-12'>
              考试时间：2018年9月12日
            </div>
          </div>
        </van-panel>
      </div>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Panel, Button, Row, Col } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Panel.name]: Panel,
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col
  }
};
</script>

<style lang="less" scoped>
.course-list {
  padding: 10px;
}
.card {
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 2px 0 #ddd;
  .card-padd {
    padding: 15px;
  }
}
</style>
