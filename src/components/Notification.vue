<template>
  <div>
    <Button label="Success" class="p-button-success" @click="showSuccess" />
    <Toast position="bottom-right" @click="openNotification"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  updated() {
    console.log("p-toast-message");
      const x = document.getElementsByClassName("p-toast-message");
      console.log(x);
  },
  methods: {
    openNotification()
    {
      console.log("p-toast-message");
      const x = document.getElementsByClassName("p-toast-message");
      console.log(x);
      this.$router.push({ path: '/exceptions' });
    },
    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
    },
    showInfo() {
      this.$toast.add({
        severity: "info",
        summary: "Info Message",
        detail: "Message Content",
        life: 3000,
      });
    },
    showWarn() {
      this.$toast.add({
        severity: "warn",
        summary: "Warn Message",
        detail: "Message Content",
        life: 3000,
      });
    },
    showError() {
      this.$toast.add({
        severity: "error",
        summary: "Error Message",
        detail: "Message Content",
        life: 3000,
      });
    },
    showTopLeft() {
      this.$toast.add({
        severity: "info",
        summary: "Info Message",
        detail: "Message Content",
        group: "tl",
        life: 3000,
      });
    },
    showBottomLeft() {
      this.$toast.add({
        severity: "warn",
        summary: "Warn Message",
        detail: "Message Content",
        group: "bl",
        life: 3000,
      });
    },
    showBottomRight() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        group: "br",
        life: 3000,
      });
    },
    showSticky() {
      this.$toast.add({
        severity: "info",
        summary: "Sticky Message",
        detail: "Message Content",
      });
    },
    showMultiple() {
      this.$toast.add({
        severity: "info",
        summary: "Message 1",
        detail: "Message 1 Content",
        life: 3000,
      });
      this.$toast.add({
        severity: "info",
        summary: "Message 2",
        detail: "Message 2 Content",
        life: 3000,
      });
      this.$toast.add({
        severity: "info",
        summary: "Message 3",
        detail: "Message 3 Content",
        life: 3000,
      });
    },
    clear() {
      this.$toast.removeAllGroups();
    },
  },
};
</script>
