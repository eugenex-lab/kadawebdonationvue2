<template>
<div class="headerFormatForm">
  <div  class="headerTextFormat">
    <slot name="header"></slot>

  </div>
<div  class="subTextFormat">
  <slot name="subHeader"></slot>

</div>
</div>
</template>

<script>
export default {
  name: "FormRightHeader",

}
</script>

<style scoped>

.headerFormatForm{
  display: none;
}

@media screen and (min-width: 899px) {

  .headerTextFormat {
    color: #010D1C;
    font-family: Inter;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0;
    padding-top: 2rem;
  }

  .subTextFormat {
    opacity: 0.5;
    color: #010D1C;
    font-family: Inter;
    font-size: 13px;
    letter-spacing: 0;
    /*margin-top: -0.2rem;*/
  }

  .headerFormatForm {
    border-bottom: 1.5px solid #E5E5E5;
    width: 87%;
    height: 5.5rem;
    display: flex;
    padding-left: 3.4rem;
    align-items: self-start;
    flex-direction: column;
  }

}
@media screen and (min-width: 1399px) {

  .headerFormatForm[data-v-7f294970] {
    border-bottom: 1.5px solid #E5E5E5;
    width: 92.3%;
    height: 5.5rem;
    display: flex;
    padding-left: 3.4rem;
    align-items: self-start;
    flex-direction: column;
  }
}
</style>