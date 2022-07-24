(function(){"use strict";var t={1500:function(t,e,s){var o=s(9242),n=s(3396);function a(t,e,s,o,a,r){const i=(0,n.up)("AppNavNar"),m=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(i),(0,n.Wm)(m)],64)}const r={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},m={class:"collapse navbar-collapse",id:"navbarSupportedContent"},c=(0,n.Uk)("Home"),l=(0,n.Uk)("Inscription"),u=(0,n.Uk)("Connection"),d=(0,n.Uk)("Administration");function p(t,e,s,o,a,p){const h=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",r,[(0,n._)("div",i,[(0,n._)("div",m,[(0,n.Wm)(h,{class:"nav-link",to:"/"},{default:(0,n.w5)((()=>[c])),_:1}),t.auth.isSigned?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(h,{key:0,class:"nav-link",to:"/register"},{default:(0,n.w5)((()=>[l])),_:1})),t.auth.isSigned?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(h,{key:1,class:"nav-link",to:"/connect"},{default:(0,n.w5)((()=>[u])),_:1})),t.auth.isSigned?((0,n.wg)(),(0,n.iD)("button",{key:2,class:"nav-link btn btn-link",onClick:e[0]||(e[0]=(...t)=>this.signOut&&this.signOut(...t))},"Deconnection")):(0,n.kq)("",!0),t.auth.isSigned?((0,n.wg)(),(0,n.j4)(h,{key:3,class:"nav-link",to:"/admin"},{default:(0,n.w5)((()=>[d])),_:1})):(0,n.kq)("",!0)])])])}var h=s(65),g={name:"AppNavBar",computed:{...(0,h.rn)("auth",["auth"])},methods:{...(0,h.nv)("auth",["signOut"])}},f=s(89);const b=(0,f.Z)(g,[["render",p]]);var v=b,w={components:{AppNavNar:v}};const y=(0,f.Z)(w,[["render",a]]);var _=y,S=s(2483),k=s(7139);const C={key:0},I={class:"container mt-5"};function V(t,e,s,o,a,r){const i=(0,n.up)("CommentCreate"),m=(0,n.up)("comments-list"),c=(0,n.up)("post-show");return(0,n.wg)(),(0,n.j4)(c,{"populate-user":!0,id:this.$route.params.id},{userDetail:(0,n.w5)((t=>[t.user?((0,n.wg)(),(0,n.iD)("p",C,"Écrit par: "+(0,k.zw)(t.user.name),1)):(0,n.kq)("",!0)])),comments:(0,n.w5)((t=>[(0,n._)("div",I,[(0,n.Wm)(m,{"post-id":t.id},{form:(0,n.w5)((()=>[(0,n.Wm)(i,{"post-id":+t.id},null,8,["post-id"])])),_:2},1032,["post-id"])])])),_:1},8,["id"])}const P=t=>((0,n.dD)("data-v-0d61d72c"),t=t(),(0,n.Cn)(),t),U={key:0},F={class:"d-flex justify-content-center overlay"},q={class:"align-self-center text-center",style:{"max-width":"75%"}},A={class:"mt-4 display-1",style:{"font-weight":"400"}},D={class:"container mb-4"},E={key:1,style:{height:"100vh"},class:"container d-flex justify-content-center"},W=P((()=>(0,n._)("p",{class:"align-self-center h3"}," Le post demandé n'existe pas ",-1))),j=[W];function x(t,e,s,o,a,r){return!this.postsIsEmpty&&this.pictures?((0,n.wg)(),(0,n.iD)("div",U,[(0,n._)("div",{class:"mb-4",style:(0,k.j5)({backgroundImage:`url(${this.url})`,height:"85vh",position:"relative"})},[(0,n._)("div",F,[(0,n._)("div",q,[(0,n._)("h1",A,(0,k.zw)(this.posts[this.id].title),1),this.usersIsEmpty?(0,n.kq)("",!0):(0,n.WI)(t.$slots,"userDetail",{key:0,user:this.users[this.posts[this.id].userId]},void 0,!0)])])],4),(0,n._)("div",D,(0,k.zw)(this.posts[this.id].title),1),(0,n.WI)(t.$slots,"comments",{id:this.id},void 0,!0)])):((0,n.wg)(),(0,n.iD)("div",E,j))}var Z={name:"PostShow",data(){return{url:null}},props:{id:{type:String,required:!0},populateUser:{type:Boolean,default:!1}},computed:{...(0,h.rn)("thematic",["pictures"]),...(0,h.rn)("posts",["posts"]),...(0,h.rn)("users",["users"]),...(0,h.Se)("posts",["postsIsEmpty"]),...(0,h.Se)("users",["usersIsEmpty"])},methods:{...(0,h.nv)("posts",["fetchPost"]),...(0,h.nv)("users",["fetchUser"]),...(0,h.nv)("thematic",["fetchPictures"])},async mounted(){await this.fetchPictures(),this.url=this.pictures[Math.floor(Math.random()*this.pictures.length)].urls.regular,await this.fetchPost(this.id),this.populateUser&&await this.fetchUser(this.posts[this.id].userId)}};const M=(0,f.Z)(Z,[["render",x],["__scopeId","data-v-0d61d72c"]]);var O=M;const $={class:"comments-title"};function B(t,e,s,o,a,r){const i=(0,n.up)("CommentItem");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.WI)(t.$slots,"form",{},void 0,!0),(0,n._)("h1",$,"Comments ("+(0,k.zw)(this.reversComments.length)+")",1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.reversComments,(t=>((0,n.wg)(),(0,n.j4)(i,{key:t.id,comment:t},null,8,["comment"])))),128))],64)}const H=t=>((0,n.dD)("data-v-64371160"),t=t(),(0,n.Cn)(),t),z={key:0,class:"be-comment"},Y=H((()=>(0,n._)("div",{class:"be-img-comment"},[(0,n._)("a",{href:"blog-detail-2.html"},[(0,n._)("img",{src:"https://bootdey.com/img/Content/avatar/avatar1.png",alt:"eeee",class:"be-ava-comment"})])],-1))),T={class:"be-comment-content"},L={class:"be-comment-name"},N={href:"blog-detail-2.html"};function K(t,e,s,o,a,r){const i=(0,n.up)("CommentEdit");return(0,n.wg)(),(0,n.iD)(n.HY,null,[this.showEdit?((0,n.wg)(),(0,n.j4)(i,{key:1,id:s.comment.id},null,8,["id"])):((0,n.wg)(),(0,n.iD)("div",z,[Y,(0,n._)("div",T,[(0,n._)("span",L,[(0,n._)("a",N,(0,k.zw)(s.comment.name),1)]),(0,n._)("p",null,(0,k.zw)(s.comment.body),1)])])),t.auth.isSigned&&!a.showEdit&&s.comment.userId===t.auth.userId?((0,n.wg)(),(0,n.iD)("button",{key:2,class:"btn btn-primary mb-4 mt-3",onClick:e[0]||(e[0]=(...t)=>r.toggleShow&&r.toggleShow(...t))},"Éditer ")):t.auth.isSigned&&a.showEdit&&s.comment.userId===t.auth.userId?((0,n.wg)(),(0,n.iD)("button",{key:3,class:"btn btn-danger mb-4 mt-3",onClick:e[1]||(e[1]=(...t)=>r.toggleShow&&r.toggleShow(...t))},"Annuler ")):(0,n.kq)("",!0)],64)}function R(t,e,s,o,a,r){const i=(0,n.up)("CommentForm");return(0,n.wg)(),(0,n.j4)(i,{"on-submit":this.onSubmit,"initial-values":this.comments[this.id]},null,8,["on-submit","initial-values"])}const G={class:"row"},J={class:"col-xs-12 col-sm-6"},Q={class:"form-group"},X=(0,n._)("label",{class:"form-label",for:"name",id:"name"},"Nom:",-1),tt={class:"col-xs-12 col-sm-6 fl_icon"},et={class:"form-group fl_icon"},st=(0,n._)("label",{class:"form-label",for:"email",id:"email"},"Email:",-1),ot={class:"col-xs-12"},nt={class:"form-group"},at=(0,n._)("label",{class:"form-label",id:"body",for:"body"},"Message:",-1),rt=(0,n._)("button",{class:"btn btn-primary mt-3"},"submit",-1);function it(t,e,s,o,a,r){const i=(0,n.up)("Field"),m=(0,n.up)("ErrorMessage"),c=(0,n.up)("Form");return(0,n.wg)(),(0,n.j4)(c,{onSubmit:this.onFormSubmit,"validation-schema":a.schema},{default:(0,n.w5)((()=>[(0,n._)("div",G,[(0,n._)("div",J,[(0,n._)("div",Q,[X,(0,n.Wm)(i,{modelValue:r.name,"onUpdate:modelValue":e[0]||(e[0]=t=>r.name=t),name:"name",type:"text",class:"form-control",disabled:this.auth.isSigned},null,8,["modelValue","disabled"]),(0,n.Wm)(m,{name:"name"})])]),(0,n._)("div",tt,[(0,n._)("div",et,[st,(0,n.Wm)(i,{modelValue:r.email,"onUpdate:modelValue":e[1]||(e[1]=t=>r.email=t),name:"email",type:"email",class:"form-control"},null,8,["modelValue"]),(0,n.Wm)(m,{name:"email"})])]),(0,n._)("div",ot,[(0,n._)("div",nt,[at,(0,n.Wm)(i,{modelValue:r.body,"onUpdate:modelValue":e[2]||(e[2]=t=>r.body=t),as:"textarea",name:"body",class:"form-control"},null,8,["modelValue"]),(0,n.Wm)(m,{name:"body"})])])]),rt])),_:1},8,["onSubmit","validation-schema"])}var mt=s(5708),ct=s(6542),lt={name:"CommentForm",components:{Form:mt.l0,ErrorMessage:mt.Bc,Field:mt.gN},props:{onSubmit:{type:Function,required:!0},initialValues:{type:Object,default(){return{name:"",body:"",email:""}}}},data(){ct.i_({mixed:{required:"Le champ est requis"}});const t=ct.Ry({name:ct.Z_().required(),body:ct.Z_().required(),email:ct.Z_().required()});return{formValues:this.initialValues,schema:t}},computed:{body:{get(){return this.formValues.body},set(t){this.formValues.body=t}},name:{get(){return this.formValues.name},set(t){this.formValues.name=t}},email:{get(){return this.formValues.email},set(t){this.formValues.email=t}},...(0,h.rn)("auth",["auth"]),...(0,h.rn)("users",["users"])},methods:{async onFormSubmit(){await this.onSubmit(this.formValues)}},mounted(){this.formValues.name=this.auth.isSigned?this.users[this.auth.userId].name:""}};const ut=(0,f.Z)(lt,[["render",it]]);var dt=ut,pt={name:"CommentEdit",components:{CommentForm:dt},props:{id:{type:Number,required:!0}},computed:{...(0,h.rn)("comments",["comments"])},methods:{...(0,h.nv)("comments",["editComment"]),async onSubmit(t){await this.editComment({id:this.id,formValues:t})}}};const ht=(0,f.Z)(pt,[["render",R]]);var gt=ht,ft={data(){return{showEdit:!1}},name:"CommentItem",components:{CommentEdit:gt},props:{comment:{type:Object,required:!0}},computed:{...(0,h.rn)("auth",["auth"])},methods:{toggleShow(){this.showEdit=!this.showEdit}}};const bt=(0,f.Z)(ft,[["render",K],["__scopeId","data-v-64371160"]]);var vt=bt,wt=s(4806),yt=s.n(wt),_t={name:"CommentsList",props:{postId:null},components:{CommentItem:vt},computed:{...(0,h.rn)("comments",["comments"]),...(0,h.Se)("comments",["filterByPostId","reversComments"]),reversComments(){return yt().reverse(this.filterByPostId(+this.postId))}},methods:{...(0,h.nv)("comments",["fetchComments"])},async mounted(){await this.fetchComments({postId:this.postId})}};const St=(0,f.Z)(_t,[["render",B],["__scopeId","data-v-4318e094"]]);var kt=St;const Ct={class:"mb-4"};function It(t,e,s,o,a,r){const i=(0,n.up)("CommentForm"),m=(0,n.up)("AppAlert");return(0,n.wg)(),(0,n.iD)("div",Ct,[(0,n.Wm)(i,{"on-submit":this.onSubmit},null,8,["on-submit"]),this.messageSuccess?((0,n.wg)(),(0,n.j4)(m,{key:0,message:this.messageSuccess,variant:"success"},null,8,["message"])):(0,n.kq)("",!0)])}function Vt(t,e,s,o,a,r){return(0,n.wg)(),(0,n.iD)("div",{class:(0,k.C_)([a.variantClass]),role:"alert"},(0,k.zw)(s.message),3)}var Pt={name:"AppAlert",data(){return{variantClass:`alert alert-${this.variant}`}},props:{variant:{type:String,required:!0},message:{type:String,required:!0}}};const Ut=(0,f.Z)(Pt,[["render",Vt]]);var Ft=Ut,qt={name:"CommentCreate",data(){return{messageSuccess:""}},components:{CommentForm:dt,AppAlert:Ft},props:{postId:{type:Number,required:!0}},methods:{...(0,h.nv)("comments",["createComment"]),async onSubmit(t){await this.createComment({...t,postId:this.postId}),this.messageSuccess="Commentaire créé",setTimeout((()=>{this.messageSuccess=""}),1150)}}};const At=(0,f.Z)(qt,[["render",It]]);var Dt=At,Et={name:"PostView",components:{PostShow:O,CommentsList:kt,CommentCreate:Dt}};const Wt=(0,f.Z)(Et,[["render",V]]);var jt=Wt;const xt=(0,n._)("h1",{class:"text-center mt-3"},"Éditer votre post",-1),Zt={class:"container"};function Mt(t,e,s,o,a,r){const i=(0,n.up)("PostForm");return(0,n.wg)(),(0,n.iD)(n.HY,null,[xt,(0,n._)("div",Zt,[(0,n.Wm)(i,{"on-submit":this.onSubmit,"initial-values":this.posts[this.$route.params.id]},null,8,["on-submit","initial-values"])])],64)}const Ot={class:"mb-3"},$t=(0,n._)("label",{class:"form-label"},"Title:",-1),Bt={class:"mb-3"},Ht=(0,n._)("label",{class:"form-label"},"Body:",-1),zt=(0,n._)("button",{class:"btn btn-primary"},"Submit",-1);function Yt(t,e,s,o,a,r){const i=(0,n.up)("Field"),m=(0,n.up)("ErrorMessage"),c=(0,n.up)("Form");return a.formValues?((0,n.wg)(),(0,n.j4)(c,{key:0,onSubmit:this.onFormSubmit,"validation-schema":a.schema},{default:(0,n.w5)((()=>[(0,n._)("div",Ot,[$t,(0,n.Wm)(i,{modelValue:r.title,"onUpdate:modelValue":e[0]||(e[0]=t=>r.title=t),name:"title",type:"text",class:"form-control"},null,8,["modelValue"]),(0,n.Wm)(m,{name:"title"})]),(0,n._)("div",Bt,[Ht,(0,n.Wm)(i,{modelValue:r.body,"onUpdate:modelValue":e[1]||(e[1]=t=>r.body=t),as:"textarea",name:"body",class:"form-control"},null,8,["modelValue"]),(0,n.Wm)(m,{name:"body"})]),zt])),_:1},8,["onSubmit","validation-schema"])):(0,n.kq)("",!0)}var Tt={name:"PostForm",props:{onSubmit:{type:Function,required:!0},initialValues:{type:Object,default(){return{title:"",body:""}}}},data(){ct.i_({mixed:{required:"Le champ est requis"}});const t=ct.Ry({title:ct.Z_().required(),body:ct.Z_().required()});return{formValues:this.initialValues,schema:t}},components:{Form:mt.l0,Field:mt.gN,ErrorMessage:mt.Bc},computed:{title:{get(){return this.formValues.title},set(t){this.formValues.title=t}},body:{get(){return this.formValues.body},set(t){this.formValues.body=t}}},methods:{async onFormSubmit(){await this.onSubmit(this.formValues)}}};const Lt=(0,f.Z)(Tt,[["render",Yt]]);var Nt=Lt,Kt={name:"PostEdit",components:{PostForm:Nt},computed:{...(0,h.rn)("posts",["posts"])},methods:{...(0,h.nv)("posts",["editPost"]),async onSubmit(t){await this.editPost({id:this.$route.params.id,formValues:t})}}};const Rt=(0,f.Z)(Kt,[["render",Mt]]);var Gt=Rt;const Jt=(0,n._)("h1",{class:"text-center mt-3"},"Créer un post",-1),Qt={class:"container"};function Xt(t,e,s,o,a,r){const i=(0,n.up)("PostForm");return(0,n.wg)(),(0,n.iD)(n.HY,null,[Jt,(0,n._)("div",Qt,[(0,n.Wm)(i,{"on-submit":this.onSubmit},null,8,["on-submit"])])],64)}var te={name:"PostCreate",components:{PostForm:Nt},methods:{...(0,h.nv)("posts",["createPost"]),async onSubmit(t){await this.createPost(t)}}};const ee=(0,f.Z)(te,[["render",Xt]]);var se=ee;const oe=(0,n.Uk)(" Cancel ");function ne(t,e,s,o,a,r){const i=(0,n.up)("router-link"),m=(0,n.up)("app-modal");return(0,n.wg)(),(0,n.j4)(m,{content:"Supprimez le post",title:"Supprimez un post","on-dismiss":()=>this.$router.push({path:"/admin"})},{actions:(0,n.w5)((()=>[(0,n._)("button",{class:"btn btn-danger",onClick:e[0]||(e[0]=t=>this.deletePost(this.$route.params.id))}," Delete "),(0,n.Wm)(i,{class:"btn btn-primary",to:"/admin"},{default:(0,n.w5)((()=>[oe])),_:1})])),_:1},8,["on-dismiss"])}const ae=t=>((0,n.dD)("data-v-433d60de"),t=t(),(0,n.Cn)(),t),re={class:"overlay"},ie={class:"d-block modal",tabindex:"-1",role:"dialog"},me={class:"modal-dialog",role:"document"},ce={class:"modal-content"},le={class:"modal-header"},ue={class:"modal-title"},de=ae((()=>(0,n._)("span",{"aria-hidden":"true"},"×",-1))),pe=[de],he=ae((()=>(0,n._)("div",{class:"modal-body"},[(0,n._)("p",null,"Modal body text goes here.")],-1))),ge={class:"modal-footer"};function fe(t,e,s,o,a,r){return(0,n.wg)(),(0,n.iD)("div",re,[(0,n._)("div",ie,[(0,n._)("div",me,[(0,n._)("div",ce,[(0,n._)("div",le,[(0,n._)("h5",ue,(0,k.zw)(s.title),1),(0,n._)("button",{onClick:e[0]||(e[0]=(...t)=>this.onDismiss&&this.onDismiss(...t)),type:"button",class:"btn btn-primary","data-dismiss":"modal","aria-label":"Close"},pe)]),he,(0,n._)("div",ge,[(0,n.WI)(t.$slots,"actions",{},void 0,!0)])])])])])}var be={name:"AppModal",props:{onDismiss:{type:Function,required:!0},title:{type:String,required:!0},content:{type:String,required:!0}},components:{}};const ve=(0,f.Z)(be,[["render",fe],["__scopeId","data-v-433d60de"]]);var we=ve,ye={name:"PostDelete",components:{AppModal:we},methods:{...(0,h.nv)("posts",["deletePost"])}};const _e=(0,f.Z)(ye,[["render",ne]]);var Se=_e;const ke=[{path:"/posts/:id",name:"postView",component:jt},{path:"/posts/edit/:id",name:"post-edit",component:Gt,meta:{requiresAuth:!0}},{path:"/posts/new",name:"post-new",component:se,meta:{requiresAuth:!0}},{path:"/posts/delete/:id",name:"post-delete",component:Se,meta:{requiresAuth:!0}}];var Ce=ke,Ie=s(6265),Ve=s.n(Ie),Pe=Ve().create({baseURL:"https://jsonplaceholder.typicode.com"});const Ue={namespaced:!0,state:{comments:null,hasFetch:!1},mutations:{fetchComments(t,e){t.comments={...t.comments,...yt().mapKeys(e,"id")}},fetchComment(t,e){t.comments={...t.comments,[e.id]:e}},createComment(t,e){t.comments={...t.comments,[e.id]:e}},editComment(t,e){t.comments={...t.comments,[e.id]:e}},deleteComment(t,e){yt().omit(t.comments,e)},hasFetch(t,e){t.hasFetch=e}},getters:{reversComments:t=>yt().reverse(yt().toArray(t.comments)),filterByPostId:t=>e=>yt().filter(t.comments,["postId",e]),filterByUserId:t=>e=>yt().filter(t.comments,["userId",e])},actions:{async fetchComments({commit:t},e){const s=await Pe.get("/comments",{params:e});t("fetchComments",s.data)},async fetchComment({commit:t},e){const s=await Pe.get(`/comments/${e}`);t("fetchComment",s.data)},async createComment({commit:t,state:e,rootState:s},o){const n=async()=>{const e=await Pe.post("/comments",o);return t("hasFetch",!0),s.auth.auth.isSigned?(e.data={...e.data,userId:s.auth.auth.userId},e):e},a=e.hasFetch?s.auth.auth.isSigned&&{data:{...o,id:yt().last(yt().toArray(e.comments)).id+1,userId:s.auth.auth.userId}}:await n();a||(a.data={data:{...o,id:yt().last(yt().toArray(e.comments)).id+1}}),t("createComment",a.data)},async editComment({commit:t},{id:e,formValues:s}){const o=await Pe.patch(`/comments/${e}`,s);t("editComment",o.data)},async deleteComment({commit:t},e){await Pe["delete"]("/comments"),t("deleteComment",e)}}};var Fe=Ue;const qe={namespaced:!0,state:{posts:null,hasFetch:!1},mutations:{fetchPosts(t,e){t.posts={...t.posts,...yt().mapKeys(e,"id")}},fetchPost(t,e){t.posts={...t.posts,[e.id]:e}},createPost(t,e){t.posts={...t.posts,[e.id]:e}},editPost(t,e){t.posts={...t.posts,[e.id]:e}},deletePost(t,e){t.posts=yt().omit(t.posts,e)}},getters:{filterByUserId:t=>e=>yt().filter(t.posts,["userId",e]),postsIsEmpty:t=>yt().isEmpty(t.posts),reversPosts:t=>yt().reverse(yt().toArray(t.posts))},actions:{async fetchPosts({commit:t},e=null){const s=await Pe.get("/posts",{params:e});t("fetchPosts",s.data)},async fetchPost({commit:t},e){const s=await Pe.get(`/posts/${e}`);t("fetchPost",s.data)},async createPost({commit:t,rootState:e,state:s},o){const n={...o,userId:e.auth.auth.userId},a=async()=>{const t=await Pe.post("/posts",n);return s.hasFetch=!0,t},r=s.hasFetch?{data:{...n,id:yt().last(yt().toArray(s.posts)).id+1}}:await a();t("createPost",r.data),await Ao.push({path:"/admin"})},async editPost({commit:t},{id:e,formValues:s}){const o=await Pe.patch(`/posts/${e}`,s);yt().isEmpty(o.data)&&(o.data={...s,id:yt().toNumber(e)}),t("editPost",o.data),await Ao.push({path:"/admin"})},async deletePost({commit:t},e){t("deletePost",e),await Ao.push("/admin")}}};var Ae=qe;s(1703);const De={namespaced:!0,state:{auth:{userId:null,isSigned:!1}},mutations:{signIn(t,e){t.auth={...t.auth,isSigned:!0,userId:e}},signOut(t){t.auth={...t.auth,isSigned:!1,userId:null}}},actions:{async signIn({rootGetters:t,commit:e},s){const{login:o,password:n}=s,a=t["users/findUser"]({password:n,login:o});if(yt().isEmpty(a))throw new Error("Login ou mot de passe incorrecte");e("signIn",a.id),await Ao.push("/")},async signOut({commit:t}){t("signOut"),await Ao.push("/")}}};var Ee=De;const We={namespaced:!0,state:{users:null},mutations:{fetchUsers(t,e){t.users={...t.users,...yt().mapKeys(e,"id")}},fetchUser(t,e){t.users={...t.users,[e.id]:e}},createUser(t,e){t.users={...t.users,[e.id]:e}},editUser(t,e){t.users={...t.users,[e.id]:e}},deleteUser(t,e){yt().omit(t.users,e)}},getters:{userExist:t=>e=>yt().some(t.users,{...e}),findUser:t=>e=>yt().find(t.users,{...e}),usersIsEmpty:t=>yt().isEmpty(t.users)},actions:{async fetchUsers({commit:t}){const e=await Pe.get("/users");t("fetchUsers",e.data)},async fetchUser({commit:t},e){const s=await Pe.get(`/users/${e}`);t("fetchUser",s.data)},async createUser({commit:t,getters:e},s){const{login:o,password:n}=s;if(e.userExist({login:o,password:n}))throw new Error("Cette utilisateur exist déja");const a=await Pe.get("/users"),r={...s,name:o,id:a.data.length+1};t("createUser",r),await Ao.push("/connect")},async editUser({commit:t},e,s){const o=await Pe.patch(`/users/${e}`,s);t("editUser",o.data)},async deleteUser({commit:t},e){await Pe["delete"]("/users"),t("deleteUser",e)}}};var je=We,xe=Ve().create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID bNHPGbMH24Y6veJYiTilfZRI9kkHZY32pkAy5t0mlQg"}});const Ze={namespaced:!0,state:{term:"programming",pictures:null},mutations:{fetchPictures(t,e){t.pictures=e},setTerm(t,e){t.term=e}},actions:{async fetchPictures({commit:t,state:e}){const s=await xe.get("/search/photos",{params:{query:e.term}});t("fetchPictures",s.data.results)},setTerm({commit:t},e){t("setTerm",e)}}};var Me=Ze,Oe=(0,h.MT)({modules:{comments:Fe,posts:Ae,auth:Ee,users:je,thematic:Me}});const $e={key:0,class:"container mt-4"};function Be(t,e,s,o,a,r){const i=(0,n.up)("SearchBar"),m=(0,n.up)("PostList");return this.errorMessage?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",$e,[(0,n.Wm)(i,{"on-submit":r.onSearchSubmit},null,8,["on-submit"]),(0,n.Wm)(m)]))}const He={key:0,class:"row justify-content-center"};function ze(t,e,s,o,a,r){const i=(0,n.up)("PostCard"),m=(0,n.up)("AppAlert");return t.posts&&!this.picturesIsEmpty?((0,n.wg)(),(0,n.iD)("div",He,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.reversPosts,(t=>((0,n.wg)(),(0,n.j4)(i,{key:t.id,post:t,img:this.pictures[Math.floor(Math.random()*this.pictures.length)]},null,8,["post","img"])))),128))])):((0,n.wg)(),(0,n.j4)(m,{key:1,message:"Aucune image n'a été trouvé",variant:"warning"}))}const Ye={class:"card",style:{width:"18rem"}},Te=["alt","src"],Le={class:"card-text"},Ne=(0,n.Uk)("Voir le post");function Ke(t,e,s,o,a,r){const i=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",Ye,[(0,n._)("img",{alt:s.post.title,class:"ui image",src:s.img.urls.regular},null,8,Te),(0,n._)("p",Le,(0,k.zw)(s.post.title),1),(0,n.Wm)(i,{class:"btn btn-primary",to:`/posts/${s.post.id}`},{default:(0,n.w5)((()=>[Ne])),_:1},8,["to"])])}var Re={name:"PostCard",props:{post:{type:Object,required:!0},img:{type:Object}}};const Ge=(0,f.Z)(Re,[["render",Ke]]);var Je=Ge,Qe={name:"PostList",components:{PostCard:Je,AppAlert:Ft},computed:{...(0,h.rn)("posts",["posts"]),...(0,h.rn)("thematic",["pictures"]),...(0,h.Se)("posts",["reversPosts"]),picturesIsEmpty(){return yt().isEmpty(this.pictures)}},methods:{...(0,h.nv)("posts",["fetchPosts"]),...(0,h.nv)("thematic",["fetchPictures"])},async mounted(){await this.fetchPosts(),await this.fetchPictures()}};const Xe=(0,f.Z)(Qe,[["render",ze]]);var ts=Xe;const es={class:"form-group row"},ss=(0,n._)("label",{for:"term",class:"col-sm-2 col-form-label"},"Marquez une thématique:",-1),os={class:"col-sm-10"};function ns(t,e,s,a,r,i){return(0,n.wg)(),(0,n.iD)("form",{onSubmit:e[2]||(e[2]=(...t)=>this.onFormSubmit&&this.onFormSubmit(...t))},[(0,n._)("div",es,[ss,(0,n._)("div",os,[(0,n.wy)((0,n._)("input",{onChange:e[0]||(e[0]=t=>this.onFormSubmit(t.target.value)),"onUpdate:modelValue":e[1]||(e[1]=t=>i.termSearch=t),type:"text",class:"form-control",id:"term",placeholder:"Password"},null,544),[[o.nr,i.termSearch]])])])],32)}var as={name:"SearchBar",props:{onSubmit:{type:Function,required:!0}},computed:{...(0,h.rn)("thematic",["term"]),termSearch:{get(){return this.term},set(t){this.setTerm(t)}}},methods:{...(0,h.nv)("thematic",["setTerm"]),onFormSubmit(){this.onSubmit(this.term)}}};const rs=(0,f.Z)(as,[["render",ns]]);var is=rs,ms={name:"HomeView",data(){return{errorMessage:""}},components:{PostList:ts,SearchBar:is},computed:{...(0,h.rn)("thematic",["pictures"])},methods:{...(0,h.nv)("thematic",["fetchPictures","setTerm"]),async onSearchSubmit(t){this.setTerm(t),await this.fetchPictures()}}};const cs=(0,f.Z)(ms,[["render",Be]]);var ls=cs;const us=(0,n._)("h1",{class:"text-center"},"Inscription",-1),ds={class:"container"};function ps(t,e,s,o,a,r){const i=(0,n.up)("UserCreate");return(0,n.wg)(),(0,n.iD)(n.HY,null,[us,(0,n._)("div",ds,[(0,n.Wm)(i)])],64)}function hs(t,e,s,o,a,r){const i=(0,n.up)("UserForm"),m=(0,n.up)("AppAlert");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i,{"on-submit":this.onSubmit},null,8,["on-submit"]),a.errorMessage?((0,n.wg)(),(0,n.j4)(m,{key:0,class:"mt-3",message:a.errorMessage,variant:"danger"},null,8,["message"])):(0,n.kq)("",!0)])}const gs={class:"mb-3"},fs=(0,n._)("label",{class:"form-label"},"Login:",-1),bs={class:"mb-3"},vs=(0,n._)("label",{class:"form-label"},"Mot de passe:",-1),ws=(0,n._)("button",{class:"btn btn-primary"},"Submit",-1);function ys(t,e,s,o,a,r){const i=(0,n.up)("Field"),m=(0,n.up)("ErrorMessage"),c=(0,n.up)("Form");return(0,n.wg)(),(0,n.j4)(c,{onSubmit:this.onFormSubmit,"validation-schema":a.schema},{default:(0,n.w5)((()=>[(0,n._)("div",gs,[fs,(0,n.Wm)(i,{modelValue:r.login,"onUpdate:modelValue":e[0]||(e[0]=t=>r.login=t),name:"login",type:"text",class:"form-control"},null,8,["modelValue"]),(0,n.Wm)(m,{name:"login"})]),(0,n._)("div",bs,[vs,(0,n.Wm)(i,{modelValue:r.password,"onUpdate:modelValue":e[1]||(e[1]=t=>r.password=t),name:"password",type:"password",class:"form-control"},null,8,["modelValue"]),(0,n.Wm)(m,{name:"password"})]),ws])),_:1},8,["onSubmit","validation-schema"])}var _s={name:"UserForm",data(){ct.i_({mixed:{required:"Le champ est requis"}});const t=ct.Ry({login:ct.Z_().required(),password:ct.Z_().required()});return{formValues:{login:"",password:""},schema:t}},props:{onSubmit:{type:Function,required:!0}},components:{Form:mt.l0,Field:mt.gN,ErrorMessage:mt.Bc},computed:{password:{get(){return this.formValues.password},set(t){this.formValues.password=t}},login:{get(){return this.formValues.login},set(t){this.formValues.login=t}}},methods:{async onFormSubmit(){await this.onSubmit(this.formValues)}}};const Ss=(0,f.Z)(_s,[["render",ys]]);var ks=Ss,Cs={name:"UserCreate",data(){return{errorMessage:""}},components:{UserForm:ks,AppAlert:Ft},methods:{...(0,h.nv)("users",["createUser"]),async onSubmit(t){await this.createUser(t).catch((t=>{this.errorMessage=t.message}))}}};const Is=(0,f.Z)(Cs,[["render",hs]]);var Vs=Is,Ps={name:"RegisterView",components:{UserCreate:Vs}};const Us=(0,f.Z)(Ps,[["render",ps]]);var Fs=Us;const qs=(0,n._)("h1",{class:"text-center"},"Connection",-1),As={class:"container"},Ds={class:"mb-3"},Es=(0,n._)("label",{class:"form-label"},"Login:",-1),Ws={class:"mb-3"},js=(0,n._)("label",{class:"form-label"},"Mot de passe:",-1),xs=(0,n._)("button",{class:"btn btn-primary"},"Submit",-1);function Zs(t,e,s,o,a,r){const i=(0,n.up)("Field"),m=(0,n.up)("ErrorMessage"),c=(0,n.up)("Form"),l=(0,n.up)("AppAlert");return(0,n.wg)(),(0,n.iD)(n.HY,null,[qs,(0,n._)("div",As,[(0,n.Wm)(c,{onSubmit:this.onFormSubmit,"validation-schema":a.schema},{default:(0,n.w5)((()=>[(0,n._)("div",Ds,[Es,(0,n.Wm)(i,{modelValue:r.login,"onUpdate:modelValue":e[0]||(e[0]=t=>r.login=t),name:"login",type:"text",class:"form-control"},null,8,["modelValue"]),(0,n.Wm)(m,{name:"login"})]),(0,n._)("div",Ws,[js,(0,n.Wm)(i,{modelValue:r.password,"onUpdate:modelValue":e[1]||(e[1]=t=>r.password=t),name:"password",type:"password",class:"form-control"},null,8,["modelValue"]),(0,n.Wm)(m,{name:"password"})]),xs])),_:1},8,["onSubmit","validation-schema"]),a.errorMessage?((0,n.wg)(),(0,n.j4)(l,{key:0,class:"mt-3",message:a.errorMessage,variant:"danger"},null,8,["message"])):(0,n.kq)("",!0)])],64)}var Ms={name:"ConnectionView",data(){ct.i_({mixed:{required:"Le champ est requis"}});const t=ct.Ry({login:ct.Z_().required(),password:ct.Z_().required()});return{errorMessage:"",formValues:{login:"",password:""},schema:t}},components:{Form:mt.l0,Field:mt.gN,ErrorMessage:mt.Bc,AppAlert:Ft},computed:{password:{get(){return this.formValues.password},set(t){this.formValues.password=t}},login:{get(){return this.formValues.login},set(t){this.formValues.login=t}}},methods:{...(0,h.nv)("auth",["signIn"]),async onFormSubmit(){await this.signIn(this.formValues).catch((t=>{this.errorMessage=t.message}))}}};const Os=(0,f.Z)(Ms,[["render",Zs]]);var $s=Os;const Bs={class:"text-center"};function Hs(t,e,s,o,a,r){return(0,n.wg)(),(0,n.iD)("h1",Bs,"404 Page")}var zs={name:"NotFoundView"};const Ys=(0,f.Z)(zs,[["render",Hs]]);var Ts=Ys;const Ls=(0,n._)("h1",{class:"text-center mt-4"},"Page d'administration",-1),Ns={class:"container"},Ks={class:"navbar mb-3"},Rs={class:"navbar-inner"},Gs={class:"nav"};function Js(t,e,s,o,a,r){const i=(0,n.up)("PostAdmin"),m=(0,n.up)("CommentAdmin");return(0,n.wg)(),(0,n.iD)(n.HY,null,[Ls,(0,n._)("div",Ns,[(0,n._)("div",Ks,[(0,n._)("div",Rs,[(0,n._)("ul",Gs,[(0,n._)("li",null,[(0,n._)("button",{class:"btn btn-link",onClick:e[0]||(e[0]=()=>r.toggleShow("posts"))},"Posts")]),(0,n._)("li",null,[(0,n._)("button",{class:"btn btn-link",onClick:e[1]||(e[1]=()=>r.toggleShow("comments"))},"Comments")])])])]),a.show.posts?((0,n.wg)(),(0,n.j4)(i,{key:0})):(0,n.kq)("",!0),a.show.comments?((0,n.wg)(),(0,n.j4)(m,{key:1})):(0,n.kq)("",!0)])],64)}const Qs=(0,n.Uk)("Créer"),Xs=(0,n.Uk)(" Éditer "),to=(0,n.Uk)(" Supprimer "),eo=(0,n.Uk)(" Voir "),so={key:1},oo=(0,n._)("h3",{class:"text-center mt-5"},"Créez un post !",-1),no=[oo];function ao(t,e,s,o,a,r){const i=(0,n.up)("router-link"),m=(0,n.up)("app-table");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(i,{class:"me-1 btn btn-success",to:"/posts/new"},{default:(0,n.w5)((()=>[Qs])),_:1}),this.postUserIsEmpty?((0,n.wg)(),(0,n.iD)("div",so,no)):((0,n.wg)(),(0,n.j4)(m,{key:0,items:this.mapAndPickPosts("id","title")},{default:(0,n.w5)((t=>[(0,n._)("td",null,[(0,n.Wm)(i,{class:"me-1 btn btn-primary",to:`/posts/edit/${t.item.id}`},{default:(0,n.w5)((()=>[Xs])),_:2},1032,["to"]),(0,n.Wm)(i,{class:"me-1 btn btn-danger",to:`/posts/delete/${t.item.id}`},{default:(0,n.w5)((()=>[to])),_:2},1032,["to"]),(0,n.Wm)(i,{class:"me-1 btn btn-success",to:`/posts/${t.item.id}`},{default:(0,n.w5)((()=>[eo])),_:2},1032,["to"])])])),_:1},8,["items"]))],64)}const ro={class:"table"},io=(0,n._)("th",null,"Actions",-1);function mo(t,e,s,o,a,r){return(0,n.wg)(),(0,n.iD)("table",ro,[(0,n._)("thead",null,[(0,n._)("tr",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.columns,(t=>((0,n.wg)(),(0,n.iD)("th",{key:t,scope:"col"},(0,k.zw)(t),1)))),128)),io])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.items,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.columns,(t=>((0,n.wg)(),(0,n.iD)("td",{key:t},(0,k.zw)(e[t]),1)))),128)),(0,n.WI)(t.$slots,"default",{item:e})])))),128))])])}var co={name:"AppTable",props:{items:{type:Object,required:!0}},computed:{columns(){return yt().uniq(yt().flatten(yt().map(this.items,(t=>yt().keys(t)))))}}};const lo=(0,f.Z)(co,[["render",mo]]);var uo=lo,po={name:"PostAdmin",components:{AppTable:uo},computed:{...(0,h.rn)("auth",["auth"]),...(0,h.rn)("posts",["posts"]),...(0,h.Se)("posts",["filterByUserId"]),postUserIsEmpty(){return yt().isEmpty(this.filterByUserId(this.auth.userId))},mapAndPickPosts(){return(...t)=>yt().map(this.filterByUserId(this.auth.userId),(e=>yt().pick(e,...t)))}}};const ho=(0,f.Z)(po,[["render",ao]]);var go=ho;const fo=(0,n.Uk)(" Voir le post "),bo={key:1},vo=(0,n._)("h3",{class:"text-center mt-5"},"Vous n'avez encore laissé de commentaires !",-1),wo=[vo];function yo(t,e,s,o,a,r){const i=(0,n.up)("router-link"),m=(0,n.up)("app-table");return this.commentsUserIsEmpty?((0,n.wg)(),(0,n.iD)("div",bo,wo)):((0,n.wg)(),(0,n.j4)(m,{key:0,items:this.mapAndPickComments("id","body")},{default:(0,n.w5)((t=>[(0,n._)("td",null,[(0,n.Wm)(i,{class:"me-1 btn btn-primary",to:`/posts/${this.comments[t.item.id].postId}`},{default:(0,n.w5)((()=>[fo])),_:2},1032,["to"])])])),_:1},8,["items"]))}var _o={name:"CommentAdmin",components:{AppTable:uo},computed:{...(0,h.rn)("auth",["auth"]),...(0,h.Se)("comments",["filterByUserId"]),...(0,h.rn)("comments",["comments"]),...(0,h.rn)("posts",["posts"]),commentsUserIsEmpty(){return yt().isEmpty(this.filterByUserId(this.auth.userId))},mapAndPickComments(){return(...t)=>yt().map(this.filterByUserId(this.auth.userId),(e=>({...yt().pick(e,...t),post:this.posts[e.postId].title})))}},mounted(){console.log()}};const So=(0,f.Z)(_o,[["render",yo]]);var ko=So,Co={name:"AdminView",components:{PostAdmin:go,CommentAdmin:ko},data(){return{show:{posts:!0,comments:!1}}},methods:{toggleShow(t){this.show=yt().mapValues(this.show,(e=>e===this.show[t]))}}};const Io=(0,f.Z)(Co,[["render",Js]]);var Vo=Io;const Po=[{path:"/",name:"home",component:ls},{path:"/register",name:"register",component:Fs},{path:"/connect",name:"connect",component:$s},{path:"/page-not-found",component:Ts,name:"page-not-found"},{path:"/admin",component:Vo,name:"admin",meta:{requiresAuth:!0}}];var Uo=Po;const Fo=[...Uo,...Ce],qo=(0,S.p7)({history:(0,S.r5)(),routes:Fo});qo.beforeEach((async t=>t.name?t.meta.requiresAuth&&!Oe.state.auth.auth.isSigned?{name:"connect"}:void 0:{name:"page-not-found"}));var Ao=qo;(0,o.ri)(_).use(Oe).use(Ao).mount("#app")}},e={};function s(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}s.m=t,function(){var t=[];s.O=function(e,o,n,a){if(!o){var r=1/0;for(l=0;l<t.length;l++){o=t[l][0],n=t[l][1],a=t[l][2];for(var i=!0,m=0;m<o.length;m++)(!1&a||r>=a)&&Object.keys(s.O).every((function(t){return s.O[t](o[m])}))?o.splice(m--,1):(i=!1,a<r&&(r=a));if(i){t.splice(l--,1);var c=n();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,n,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,a,r=o[0],i=o[1],m=o[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(m)var l=m(s)}for(e&&e(o);c<r.length;c++)a=r[c],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(l)},o=self["webpackChunkjsonplaceholder_app_vue_js"]=self["webpackChunkjsonplaceholder_app_vue_js"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(1500)}));o=s.O(o)})();
//# sourceMappingURL=app.3d643200.js.map