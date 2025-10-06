<template>
  <u-app>
    <div class="p-5 flex flex-col items-center min-h-screen">
      <s-skip-to-main-content />
      <div class="main-header main-content">
        <slot name="header" />
      </div>
      <main id="main" class="main-content">
        <slot />
      </main>
      <slot name="footer" />
    </div>
  </u-app>
</template>
<style lang="css" scoped>
.main-content {
  margin-block: 20px;
  width: 80%;
}

.main-header {
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .main-content {
    width: 90%;
  }

  .main-header {
    margin-bottom: 20px;
  }
}
</style>
