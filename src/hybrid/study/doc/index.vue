<template>
  <div class='page-doc'>
    <van-collapse v-model="activeNames">
      <van-collapse-item class="lala" title="有赞微商城" name="1">
        <van-cell-group style='margin-top:-1px'>
          <van-cell v-for='item in 4' :key='"item"+item'>
            <div slot="title" class='van-clearfix'>
              <div class='pull-left'>
                《普通心理学》课件资料一
              </div>
              <div class='pull-right t-12 t-gray'>
                <span class="iconfont icon-ziliao"></span>
              </div>
            </div>
          </van-cell>
        </van-cell-group>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { Collapse, CollapseItem, Cell, CellGroup } from "vant";
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  data() {
    return {
      activeNames: ["1"]
    };
  }
};
</script>

<style lang="less">
.page-doc {
  .van-collapse-item__content {
    padding: 0;
  }
}
</style>
