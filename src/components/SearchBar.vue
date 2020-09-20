<template>
  <span class="p-input-icon-right">
    <InputText
      type="text"
      :value="value"
      @input="updateValue"
    />
    <i class="pi pi-search" />
  </span>
</template>

<script>
//import InputText from 'primevue/inputtext';

export default {
  name: 'SearchBar',
  components: {
    //InputText,
  },
  props: [
    'value',
    'updateValue',
  ],
};
</script>

<style scoped>
span {
  width: 100%;
}
.p-inputtext {
  width: 100%;
}
</style>
