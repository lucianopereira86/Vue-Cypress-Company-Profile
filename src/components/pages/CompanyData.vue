<template>
  <div class="card-container no-border" style="padding:30px">
    <div>{{getText()}}</div>
    <MyInput
      :title="'COMPANY NAME'"
      :max="50"
      :vm="company"
      :prop="'name'"
      :error="$v.company.name.$invalid"
      :errorMessage="'Required field'"
      :placeholder="'e.g. Your Company Name'"
    />
    <MyInput
      :title="'COMPANY SPEND'"
      :vm="company"
      :prop="'spend'"
      :error="$v.company.spend.$invalid"
      :errorMessage="'Required field'"
      :placeholder="'e.g. $ 150,000'"
      :mask="'$ ###,###'"
    />
    <MyInput :title="'COMPANY SPEND ABILITY'" />
    <MyInput
      :width="25"
      :vm="company"
      :titleLeft="'MIN'"
      :prop="'min'"
      :error="$v.company.min.$invalid"
      :errorMessage="!$v.company.min.required? 'Required field' : 'MIN must not be greater than MAX'"
      :placeholder="'e.g. $ 150,000'"
      :mask="'$ ###,###'"
    />
    <MyInput
      :width="25"
      :vm="company"
      :titleLeft="'MAX'"
      :prop="'max'"
      :error="$v.company.max.$invalid"
      :errorMessage="!$v.company.max.required? 'Required field' : 'MAX must not be lesser than MIN'"
      :placeholder="'e.g. $ 300,000'"
      :mask="'$ ###,###'"
    />
    <div class="input-title">
      <div>NOTES</div>
    </div>
    <div>
      <textarea
        class="form-control"
        v-model="notes"
        placeholder="e.g. Good Tech Company"
        style="width:97%;height:15vh"
        maxlength="1000"
        @click="showModal()"
      />
    </div>
    <MyModal ref="MyModal" />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
import MyInput from '../utils/MyInput.vue'
import MyModal from '../utils/MyModal.vue'
export default {
  name: 'CompanyData',
  components: {
    MyInput,
    MyModal
  },
  data () {
    return {
      company: {
        name: '',
        spend: '',
        min: '',
        max: ''
      }
    }
  },
  computed: {
    ...mapState('Company', ['notes']),
  },
  mounted () {
    this.$v.company.$touch()
  },
  methods: {
    getText () {
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    showModal () {
      this.$refs.MyModal.open(this.notes)
    }
  },
  validations: {
    company: {
      name: {
        required
      },
      spend: {
        required,
        isPositive: (val) => {
          let _val = val.replace(/[\D.]/g, '')
          return _val ? parseFloat(_val) > 0 : false
        }
      },
      min: {
        required,
        lteMax: (val, company) => {
          let min = val.replace(/[\D.]/g, '')
          let max = company.max.replace(/[\D.]/g, '')
          return parseFloat(min) <= parseFloat(max)
        }
      },
      max: {
        required,
        gteMin: (val, company) => {
          let max = val.replace(/[\D.]/g, '')
          let min = company.min.replace(/[\D.]/g, '')
          return parseFloat(max) >= parseFloat(min)
        }
      }
    }
  }
}
</script>

<style>
.form-control {
  display: block;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: inherit;
}
.input-title {
  color: #9c9c9c;
  margin-top: 30px !important;
  margin-bottom: 10px !important;
  font-size: 13px;
}
.form-control::placeholder {
  color: #d5d9e5;
  opacity: 1;
}
</style>
