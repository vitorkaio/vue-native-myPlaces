<template>
  <ButtonWrapper :width="width" :height="height" :on-press="addCity">
    <TitleButtonWrapper>{{ title }}</TitleButtonWrapper>
  </ButtonWrapper>
</template>

<script>
import { ButtonWrapper, TitleButtonWrapper } from './ButtonStyled';

export default {
  props: {
    width: String,
    height: Number,
    addCity: Function,
    title: {
      type: String,
      required: true
    }
  },
  components: {
    ButtonWrapper,
    TitleButtonWrapper
  }
}
</script>

<style scoped>

</style>
