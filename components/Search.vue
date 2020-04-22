<template>
  <el-header>
    <router-link to="/" tag="span" style="cursor: pointer">
      Music
    </router-link>
    <span class="float-right">
      <el-input
        v-model="searchString"
        placeholder="Search Albums"
        clearable
        @change="searchMusic"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          :disabled="!dataAvailable"
          @click="searchMusic"
        ></el-button>
      </el-input>
    </span>
  </el-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Search'
})
export default class Search extends Vue {
  private searchString: string = '';

  public searchMusic() {
    this.$router.push(`/${this.searchString}`);
    this.searchString = '';
  }

  get dataAvailable() {
    return this.searchString !== null && this.searchString !== '';
  }
}
</script>

<style lang="scss" scoped>
.float-right {
  float: right;
}

.el-header {
  overflow: hidden;
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  font-size: 1rem;
  position: fixed;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 1;
}
</style>
