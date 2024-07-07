<template>
  <div class="m-4 mr-0 overflow-hidden bg-white">
    <BasicTree
      title="部门列表"
      toolbar
      search
      :clickRowToExpand="true"
      :treeData="treeData"
      :fieldNames="{ key: 'id', title: 'name' }"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTree, TreeItem } from '@/components/Tree';
  import { queryDeptTree } from '@/api/system/dept';
  import { onMounted, ref } from 'vue';

  defineOptions({ name: 'DeptTree' });

  const emit = defineEmits(['select']);

  const treeData = ref<TreeItem[]>([]);

  async function fetch() {
    treeData.value = (await queryDeptTree()) as unknown as TreeItem[];
  }

  function handleSelect(keys) {
    emit('select', keys[0]);
  }

  onMounted(() => {
    fetch();
  });
</script>
