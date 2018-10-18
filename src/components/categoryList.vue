<template lang="html">
  <div class="category">
    <span class="section_name">category list</span>
    <li><a href="#" class="active">елемент-1</a></li>
    <li><a href="#">елемент-2</a></li>
    <li><a href="#">елемент-3</a></li>
    <li><a href="#">елемент-4</a></li>
    <li><a href="#">елемент-5</a></li>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .category{
    border-bottom: solid #1997c1 1px;
    padding-bottom: 15px;
  }
  .category a{
    display: block;
    cursor: pointer;
    width: 100%;
    margin: 5px 0;
    border-radius: 5px;
    padding: 7px 0;
    color: #333;
    box-sizing: border-box;
    padding-left: 15px;
  }
  .category a.active{
    background: #1997c6; /* Old browsers */
    background: -moz-linear-gradient(left, #1997c6 0%, #7db9e8 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #1997c6 0%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #1997c6 0%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1997c6', endColorstr='#7db9e8',GradientType=1 ); /* IE6-9 */
    color: #fff;
  }
</style>
