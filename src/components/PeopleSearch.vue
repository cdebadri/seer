<template>
  <div>
    <div class="input-group md-form form-sm form-1 p-2 pt-4">
      <input
        class="form-control my-0 py-1 amber-border"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div class="input-group-append">
        <span class="input-group-text amber lighten-3" id="basic-text1">
          <i class="fas fa-search text-grey" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-group.md-form.form-sm.form-1 input {
  border: 1px solid #bdbdbd;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.input-group.md-form.form-sm.form-1 input.amber-border {
  border: 1px solid #ffca28;
}
.input-group-text {
  background-color: #ffca28;
  border: #ffca28;
}
</style>
