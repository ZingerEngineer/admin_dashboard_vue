<template>
  <button class="comment-body h-10 w-full flex items-center hover:bg-slate-300 justify-between">
    <div class="flex flex-row text-stone-700">
    <component class = "w-5 h-5 ml-10 mr-4 " :is="comment.icon" />
    <p>{{ comment.label }}</p>
    </div>
    <p class="mr-10 text-stone-700">{{ comment.subLabel }}</p>
  </button>
</template>

<script>
export default {
  name: 'comment-element',
  props: {
    comment: {
      type: Object
    }
  }
}
</script>

<style></style>
