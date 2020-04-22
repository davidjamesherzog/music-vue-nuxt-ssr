<template>
  <el-table
    :data="albumList.results"
    :show-header="false"
    style="width: 100%"
    @row-click="singleMusic"
  >
    <el-table-column width="150" label="Picture">
      <template slot-scope="scope">
        <el-image :src="scope.row.artworkUrl100" class="image"> </el-image>
      </template>
    </el-table-column>
    <el-table-column label="Picture">
      <template slot-scope="scope">
        <div>
          <div class="ellipsis">{{ scope.row.artistName }}</div>
          <div class="bottom clearfix">
            <div class="ellipsis">Title: {{ scope.row.collectionName }}</div>
            <div>Date: {{ scope.row.releaseDate.substring(0, 4) }}</div>
            <div>Genre: {{ scope.row.primaryGenreName }}</div>
            <div>Tracks: {{ scope.row.trackCount - 1 }}</div>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { AlbumList } from '../models/album.list';
import { Type } from '../models/type';

@Component({
  name: 'AlbumTable'
})
export default class AlbumTable extends Vue {
  @Prop({ type: Object })
  private albumList!: AlbumList;

  public singleMusic(row: Type) {
    this.$router.push('/music/' + row.collectionId);
  }
}
</script>

<style lang="scss" scoped>
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
