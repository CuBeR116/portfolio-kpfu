<template>
  <div class="main-contacts" id="contacts">
    <div class="contacts-filter"></div>
    <div class="main-form-wrapper">
      <div class="form-wrapper">
        <div class="cotnacts-title">Свяжитесь с нами</div>
        <form action="" class="main-form" data-form>
          <div class="form-left-column">
            <label>
              <span>Ваше имя*</span>
              <input type="text" required placeholder="Имя" />
            </label>
            <label>
              <span>Ваш номер телефона*</span>
              <input type="text" required placeholder="+7 (999) 999-99-99" />
            </label>
          </div>
          <div class="form-right-column">
            <input type="submit" value="Отправить" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
};
</script>