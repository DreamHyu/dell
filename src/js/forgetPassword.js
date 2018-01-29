new Vue({
  el: '#app',
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } 
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      cancelForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('cancel!');
          } else {
            console.log('cancelForm submit!!');
            return false;
          }
        });
      }
 	}
})