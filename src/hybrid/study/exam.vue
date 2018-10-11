<template>
  <div>
    <van-cell-group class='mb-10'>
      <van-cell title="单选题">
        <div class='t-right'>
          <span class='t-red'>2</span>/<span>12</span>
        </div>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="单元格单元格单元格单元格单元格单元格单元格?单元格单元格单元格单元格?单元格单元格单元格单元格单元格单元格单元格单元格单元格?" />
      <div class='exam-options'>
        <van-radio-group v-model="radio">
          <van-radio class='mb-20' name="1">单选框 1</van-radio>
          <van-radio class='mb-20' name="2">单选框 2</van-radio>
        </van-radio-group>
      </div>
    </van-cell-group>
    <div class='pf pf-b'>
      <van-button square type='danger' size='large'>下一题</van-button>
    </div>
  </div>
</template>

<script>
/**
 * 答题测验
 */
import {
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Button
} from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Button.name]: Button
  },
  data() {
    return {
      radio: ""
    };
  }
};
</script>

<style>
.exam-options {
  padding: 20px 15px;
  line-height: 1;
}
</style>
