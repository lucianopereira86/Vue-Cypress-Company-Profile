<template>
  <transition v-if="show" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">ADDITIONAL NOTES</slot>
            <img
              class="modal-header-button"
              src="../../images/CompanyDataModal/close.png"
              @click="show = false"
            />
          </div>

          <div class="modal-body">
            <textarea
              name="body"
              class="form-control"
              v-model="notes"
              placeholder="e.g. Good Tech Company"
              style="width:97%;height:20vh"
              maxlength="1000"
            />
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="save()">SAVE</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      notes: '',
      show: false
    }
  },
  methods: {
    ...mapMutations('Company', ['SET_NOTES']),
    open (notes) {
      this.notes = notes
      this.show = true
    },
    save () {
      this.SET_NOTES(this.notes)
      this.show = false
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 40vw;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin-top: 0;
  /* color: #42b983; */

  color: #b8b8b8;
  margin-bottom: 10px !important;
  font-size: 13px;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  text-align: end;
}

.modal-header-button {
  float: right;
  cursor: pointer;
}

.modal-default-button {
  background-color: #5d699a;
  color: white;
  border: 0;
  width: 100px;
  height: 30px;
  border-radius: 5px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>