<template>
  <div>
    <div class='score mb-10'>
      <div>
        <span>答对</span>
      </div>
      <div class='t-center'>
        <span style='font-size:100px;'>28</span>
      </div>
      <div class='t-right'>/32道</div>
    </div>
    <van-cell-group>
      <van-cell title="测试情况">
        <span class="t-blue">正确</span>
        <span class='t-red'>错误</span>
        <span class='t-orange'>无评判</span>
      </van-cell>
      <div class='clearfix answer'>
        <div class="answer-item error">
1
        </div>
        <div class="answer-item right">
2
        </div>
        <div class="answer-item">
3
        </div>
        <div class="answer-item">
4
        </div>
        <div class="answer-item">
5
        </div>
        <div class="answer-item">
6
        </div>
      </div>
    </van-cell-group>
    <div class='pf pf-b'>
      <van-row>
        <van-col span="8">
          <van-button square type='default' size='large'>试题解析</van-button>
        </van-col>
        <van-col span="16">
            <van-button square type='danger' size='large'>下一套试题</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
/**
 * 答题测验
 */
import { Cell, CellGroup, Button, Row, Col } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col
  }
};
</script>
<style lang="less" scoped>
.score {
  background: #07f;
  color: #fff;
  font-size: 20px;
  line-height: 1;
  padding: 20px;
}
.answer {
  padding: 15px 0;
  overflow: hidden;
}
.answer-item {
  float: left;
  width: 40px;
  width: 40px;
  border-radius: 40px;
  line-height: 40px;
  font-size: 24px;
  color: #f5a623;
  text-align: center;
  border: 1px solid #f5a623;
  box-sizing: border-box;
  margin: 10px 15px;

  &.error {
    background: #d0021b;
    border: 0;
    color: #fff;
  }
  &.right {
    color: #fff;
    border: 0;
    background: #07f;
  }
}
</style>

