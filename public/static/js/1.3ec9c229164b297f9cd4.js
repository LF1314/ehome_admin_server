webpackJsonp([1],{sx6j:function(e,t){},vFK7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"addbanner",data:function(){return{isedit:!1,newlist:[],dialogTableVisible:!1,category:[],bannerData:{imgUrl:"",newId:"",title:"",type:"",status:"1",index:""},rules:{title:[{required:!0,message:"请输入新闻标题",trigger:"blur"}],imgUrl:[{required:!0,message:"请上传轮播图头图",trigger:"change"}],type:[{required:!0,message:"请选择分类",trigger:"change"}]}}},components:{pic:a("YAzi").a},methods:{getcategory:function(){var e=this;this.$axios.get("/category").then(function(t){e.category=t.category})},changedialog:function(e){var t=this;this.dialogTableVisible=!this.dialogTableVisible,this.$axios.get("/news/newtype",{type:e}).then(function(e){t.newlist=e.data})},addnewid:function(e){this.bannerData.newId=e,this.dialogTableVisible=!1},addbanner:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("信息填写不完整"),!1;t.$axios.post("/banner/addbaner",t.bannerData).then(function(e){200==e.code&&(t.$message.success({message:e.msg}),t.$router.push("/home/bannerlist"))})})},getonebaner:function(){var e=this,t=this.$route.query.id;this.$axios.get("/banner/"+t).then(function(t){e.bannerData=t.data})},savebaner:function(){}},watch:{$route:function(e){"editbanner"==e.name?this.isedit=!0:(this.isedit=!1,this.bannerData={imgUrl:"",newId:"",title:"",type:"",status:"1",index:""})}},created:function(){this.getcategory(),"editbanner"==this.$route.name&&(this.getonebaner(),this.isedit=!0)}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addbanner_wraper"},[a("el-card",{staticClass:"card_wraper"},[a("el-form",{ref:"ruleForm",attrs:{model:e.bannerData,"label-width":"100px",rules:e.rules}},[a("el-form-item",{attrs:{label:"轮播头图",prop:"imgUrl"}},[[a("pic",{model:{value:e.bannerData.imgUrl,callback:function(t){e.$set(e.bannerData,"imgUrl",t)},expression:"bannerData.imgUrl"}})]],2),e._v(" "),a("el-form-item",{attrs:{label:"轮播图标题",prop:"title"}},[a("el-input",{model:{value:e.bannerData.title,callback:function(t){e.$set(e.bannerData,"title",t)},expression:"bannerData.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"显示轮播图"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0","active-text":"显示","inactive-text":"不显示"},model:{value:e.bannerData.status,callback:function(t){e.$set(e.bannerData,"status",t)},expression:"bannerData.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"索引"}},[a("el-input-number",{attrs:{size:"small",min:1},model:{value:e.bannerData.index,callback:function(t){e.$set(e.bannerData,"index",t)},expression:"bannerData.index"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"分类",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择分类"},model:{value:e.bannerData.type,callback:function(t){e.$set(e.bannerData,"type",t)},expression:"bannerData.type"}},e._l(e.category,function(t,n){return a("el-option",{key:n,attrs:{label:t.category,value:t._id},nativeOn:{click:function(a){e.changedialog(t._id)}}})}))],1),e._v(" "),a("el-form-item",[e.isedit?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.savebaner()}}},[e._v("保存修改")]):a("el-button",{staticClass:"addbtn",attrs:{type:"primary"},on:{click:function(t){e.addbanner("ruleForm")}}},[e._v("\n                      添加轮播图\n                  ")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新闻列表",width:"60%",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-table",{attrs:{data:e.newlist,border:""}},[a("el-table-column",{attrs:{property:"author.userName",label:"作者",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{property:"author.nickName",label:"笔名",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{property:"title",label:"标题",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{label:"头图"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticClass:"new_img",attrs:{src:e.row.newimg,alt:""}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.addnewid(t.row._id)}}},[e._v("添加")])]}}])})],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(e){a("sx6j")},"data-v-9f74c24c",null);t.default=r.exports}});
//# sourceMappingURL=1.3ec9c229164b297f9cd4.js.map