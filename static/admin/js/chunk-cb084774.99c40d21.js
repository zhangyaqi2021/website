(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb084774"],{"0783":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-spin-col"},[a("Card",{attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[e._v("资料修改")]),[a("Form",{ref:"formValidate",attrs:{"label-width":110,model:e.formValidate,rules:e.ruleValidate}},[a("FormItem",{attrs:{label:"用户名",prop:"username"}},[a("Input",{attrs:{placeholder:"请输入标题"},model:{value:e.formValidate.username,callback:function(t){e.$set(e.formValidate,"username",t)},expression:"formValidate.username"}})],1),a("FormItem",{attrs:{label:"头像",prop:"image"}},[e.baseUrl?a("img",{staticStyle:{height:"300px"},attrs:{src:e.baseUrl,alt:""}}):e._e(),a("p",{staticClass:"file_image"},[a("input",{staticClass:"file",attrs:{type:"file"},on:{change:function(t){return e.preview(t)}}}),a("Icon",{attrs:{type:"ios-cloud-upload-outline",size:50}})],1)]),a("FormItem",{attrs:{label:"职位",prop:"position"}},[a("Input",{model:{value:e.formValidate.position,callback:function(t){e.$set(e.formValidate,"position",t)},expression:"formValidate.position"}})],1),a("FormItem",{attrs:{label:"描述(Description)",prop:"info"}},[a("Input",{model:{value:e.formValidate.info,callback:function(t){e.$set(e.formValidate,"info",t)},expression:"formValidate.info"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("发布")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleReset("formValidate")}}},[e._v("重置")])],1)],1)]],2)],1)},s=[],r=a("795b"),o=a.n(r),n=(a("7f7f"),a("1157"),a("2f62"),a("c24f")),l=a("c276"),u={data:function(){return{baseUrl:"",formValidate:{username:"",info:"",position:"",list_pic:""},ruleValidate:{username:[{required:!0,message:"值不能为空",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var a=new FormData;a.append("username",t.formValidate.username),a.append("info",t.formValidate.info),a.append("position",t.formValidate.position),a.append("list_pic",t.formValidate.list_pic),Object(n["j"])(t.$store.state.user.userId,a,Object(l["k"])("token")).then(function(e){t.$Message.success("发布成功!"),t.$router.push({path:"/home"})}).catch(function(e){console.log(e)})}else t.$Message.error("Fail!")})},handleReset:function(e){this.$refs[e].resetFields()},preview:function(e){var t=this,a=new o.a(function(t,a){var i=new FileReader;i.readAsDataURL(e.target.files[0]),i.onload=function(){t(i.result)}});a.then(function(a){t.baseUrl=a,t.formValidate.list_pic=e.target.files[0]})}},created:function(){console.log(this.$store.state.user),this.formValidate.username=this.$store.state.user.userName,this.baseUrl=this.$store.state.user.avatorImgPath,this.formValidate.position=this.$store.state.user.position,this.formValidate.info=this.$store.state.user.info}},f=u,c=(a("b74b"),a("2877")),m=Object(c["a"])(f,i,s,!1,null,"7f9034ef",null);t["default"]=m.exports},8934:function(e,t,a){},b74b:function(e,t,a){"use strict";var i=a("8934"),s=a.n(i);s.a}}]);