<template>
  <div v-if="!$route.params.id">
    <div class="text-xs-center">
      <h2>Search for a musician</h2>
    </div>
  </div>

  <div v-else>
    <el-container v-loading="loading" grid-list-xl>
      <album-table
        class="hidden-sm-and-up"
        :album-list="albumList"
      ></album-table>
      <el-row
        :gutter="20"
        class="hidden-xs-only scroll-container"
        style="overflow-y: auto;"
      >
        <el-col
          v-for="(item, index) in albumList.results"
          :key="index"
          :span="12"
          :xs="{ span: 24 }"
          :sm="{ span: 8 }"
          :lg="{ span: 6 }"
          :xl="{ span: 4 }"
          style="overflow-y: auto;"
        >
          <album-card :item="item"></album-card>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { namespace } from 'vuex-class';
import { AlbumList } from '@/models/album.list';
import AlbumCard from '@/components/AlbumCard.vue';
import AlbumTable from '@/components/AlbumTable.vue';

const musicModule = namespace('music');

@Component({
  name: 'Home',
  components: {
    AlbumCard,
    AlbumTable
  }
})
export default class Home extends Vue {
  @musicModule.State
  private loading!: boolean;

  @musicModule.State
  private albumList!: AlbumList;

  @musicModule.Action
  private getAlbums: any;

  public mounted() {
    if (this.$route.params.id) {
      this.getAlbums(this.$route.params.id);
    }
  }
}
</script>
