<template>
  <div class="article card">
    <div class="card-header">
      <div div class="level">
        <div class="level-left">
          <p class="level-item">
            <slot name="date"></slot>
          </p>
        </div>
        <div class="level-right">
          <div class="level-item">
            <h4 class="card-header-title has-text-centered">
              <slot name="header"></slot>
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body content">
      <p class="is-size-5 article__text">
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.article {
  padding: 1rem;
  &:not(:first-of-type) {
    margin-top: 1rem;
  }
  &__text {
    padding: 5px;
  }
}
</style>