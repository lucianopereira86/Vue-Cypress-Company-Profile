<template>
  <div :style="`width:${width || 48}%;`" :class="{ 'inline-block': width }">
    <div class="input-title" v-if="title">
      <div>{{title}}</div>
    </div>
    <div>
      <span class="input-title-min" v-if="titleLeft">{{titleLeft}}</span>
      <input
        v-if="vm && mask"
        type="text"
        v-model="vm[prop]"
        :placeholder="placeholder"
        :class="[{ error: error }, 'form-control', 'inline-block']"
        v-mask="`${mask}`"
        :style="{ width: `${titleLeft? 60 : 95}%`}"
        :data-cy="prop"
      />
      <input
        v-if="vm && !mask"
        type="text"
        v-model="vm[prop]"
        :placeholder="placeholder"
        :maxlength="max"
        :class="[{ error: error }, 'form-control', 'inline-block']"
        :style="{ width: `${titleLeft? 60 : 95}%`}"
        :data-cy="prop"
      />
    </div>
    <div>
      <span :data-cy="`${prop}-error`" class="error-message" v-if="error">{{errorMessage}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isTextArea: Boolean,
    width: Number,
    title: String,
    titleLeft: String,
    vm: Object,
    prop: String,
    max: Number,
    error: Boolean,
    errorMessage: String,
    placeholder: String,
    mask: String
  }
}
</script>

<style scoped>
.input-title-min {
  color: #b8b8b8;
  margin-right: 10px !important;
  font-size: 12px;
}
.error {
  border: 2px solid rgb(247, 136, 136);
  padding: 0.305rem 0.7rem;
}
.error-message {
  color: red;
  font-size: 10px;
}
</style>