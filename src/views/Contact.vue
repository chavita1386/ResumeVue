<template>
  <div class="contact container">
    <form action="post" class="form">
      <label for="name" class="label">Name</label>
      <input type="text" name="name" id="name"
        class="input"
        maxlength="75">
      <label for="email" class="label">Email</label>
      <input type="email" name="email" id="email"
        class="input"
        maxlength="75">
      <label for="message" class="label">Message</label>
      <textarea name="message" id="message" cols="30" rows="10"
        class="input textarea"
        maxlength="150"></textarea>
      <div class="center">
        <button id="sendMessage" class="button"
        :disabled="!isValid">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isValid: false,
    };
  },
};
</script>
