"use strict";(self.webpackChunkmyWork=self.webpackChunkmyWork||[]).push([[411],{3411:(w,v,r)=>{r.r(v),r.d(v,{Forms8Module:()=>m});var d=r(6895),a=r(3551),u=r(1571);class g{}g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=u.Xpm({type:g,selectors:[["app-forms8"]],decls:10,vars:0,consts:[[1,"nav__list"],[1,"nav__item"],["routerLinkActive","active","routerLink","task-1",1,"nav__link","margin"],["routerLinkActive","active","routerLink","task-2",1,"nav__link","margin"]],template:function(t,o){1&t&&(u.TgZ(0,"h1"),u._uU(1,"\u0424\u043e\u0440\u043c\u044b"),u.qZA(),u.TgZ(2,"ul",0)(3,"li",1)(4,"a",2),u._uU(5,"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 1"),u.qZA()(),u.TgZ(6,"li",1)(7,"a",3),u._uU(8,"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 2"),u.qZA()()(),u._UZ(9,"router-outlet"))},dependencies:[a.lC,a.rH,a.Od],styles:[".nav__list[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:0;margin-top:10px;margin-bottom:10px;list-style:none}.nav__link[_ngcontent-%COMP%]{display:flex;align-self:center;color:#a1a1a1;text-decoration:none}.nav__item[_ngcontent-%COMP%]{position:relative}.nav__item[_ngcontent-%COMP%]:not(:last-child){margin-right:30px}.active[_ngcontent-%COMP%]{color:#00f}"]});var e=r(433),h=r(1354),Z=r(8594);class i{validate(t){return function A(n){const t=n.controls.password,o=n.controls.confirm;return!t||!o||o.errors&&!o.errors.passwordMatch?null:t.value!==o.value?{passwordMatch:!0}:null}(t)}}function y(n,t){1&n&&u._UZ(0,"ng-error",19)}function x(n,t){1&n&&u._UZ(0,"ng-error",20)}function T(n,t){1&n&&u._UZ(0,"ng-error",21)}i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=u.lG2({type:i,selectors:[["","appPasswordMatch",""]],features:[u._Bn([{provide:e.Cf,useExisting:i,multi:!0}])]});const B=function(){return{updateOn:"blur"}};class f{sendForm(t){if(!t.valid){let o="\u041d\u0435 \u0432\u0435\u0440\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0444\u043e\u0440\u043c\u0430:";return"INVALID"===t.controls.email.status&&(o+="\n \u041d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email"),"INVALID"===t.controls.name.status&&(o+="\n \u041d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f"),"INVALID"===t.controls.password.status&&(o+="\n \u041d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0438\u043b\u0438 \u0435\u0433\u043e \u043f\u043e\u0432\u0442\u043e\u0440"),alert(o)}alert("\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c! "+t.controls.name.value+", \u0432\u044b \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b.")}constructor(t){this.activatedRoute=t,this.title="",this.user={name:"",email:""},this.title=this.activatedRoute.snapshot.data.title}}f.\u0275fac=function(t){return new(t||f)(u.Y36(a.gz))},f.\u0275cmp=u.Xpm({type:f,selectors:[["app-task1"]],decls:33,vars:6,consts:[[1,"container"],[1,"form",3,"ngFormOptions","ngSubmit"],["form","ngForm"],[1,"form-block"],[1,"form-group"],["for","",1,"form-label"],["type","text","name","name","placeholder","\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u043b\u043e\u0432","ngModel","","required","","pattern","[A-Z\u0410-\u042f][a-z\u0430-\u044f]*( *[A-Z\u0410-\u042f][a-z\u0430-\u044f]*){1,2}",1,"form-input"],["name","ngModel"],["message","\u041d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f",4,"ngIf"],["type","email","name","email","placeholder","user@google.com","ngModel","","required","","pattern","\\w{1,}@\\w{1,}.\\w{2,3}",1,"form-input"],["email","ngModel"],["message","\u041d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 Email",4,"ngIf"],["ngModelGroup","password","appPasswordMatch","",1,"form-block"],["passwordGroup","ngModelGroup"],["type","password","name","password","placeholder","a-z, A-Z, 1-9, \u0441\u0438\u043c\u0432\u043e\u043b\u044b","ngModel","","required","","pattern","^(?=.*[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$",1,"form-input"],["password","ngModel"],["message","\u041d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",4,"ngIf"],["type","password","name","confirm","ngModel","","required","",1,"form-input"],["text","\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c","buttonType","border"],["message","\u041d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f"],["message","\u041d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 Email"],["message","\u041d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"]],template:function(t,o){if(1&t){const M=u.EpF();u.TgZ(0,"p"),u._uU(1),u.qZA(),u.TgZ(2,"section",0)(3,"p"),u._uU(4,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),u.qZA(),u.TgZ(5,"form",1,2),u.NdJ("ngSubmit",function(){u.CHM(M);const F=u.MAs(6);return u.KtG(o.sendForm(F))}),u.TgZ(7,"div",3)(8,"div",4)(9,"label",5),u._uU(10,"\u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f"),u.qZA(),u._UZ(11,"input",6,7),u.YNc(13,y,1,0,"ng-error",8),u.qZA(),u.TgZ(14,"div",4)(15,"label",5),u._uU(16,"Email"),u.qZA(),u._UZ(17,"input",9,10),u.YNc(19,x,1,0,"ng-error",11),u.qZA()(),u.TgZ(20,"div",12,13)(22,"div",4)(23,"label",5),u._uU(24,"\u041f\u0430\u0440\u043e\u043b\u044c"),u.qZA(),u._UZ(25,"input",14,15),u.YNc(27,T,1,0,"ng-error",16),u.qZA(),u.TgZ(28,"div",4)(29,"label",5),u._uU(30,"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"),u.qZA(),u._UZ(31,"input",17),u.qZA()(),u._UZ(32,"app-button",18),u.qZA()()}if(2&t){const M=u.MAs(12),_=u.MAs(18),F=u.MAs(26);u.xp6(1),u.hij('"',o.title,'"'),u.xp6(4),u.Q6J("ngFormOptions",u.DdM(5,B)),u.xp6(8),u.Q6J("ngIf",M.hasError("pattern")),u.xp6(6),u.Q6J("ngIf",_.hasError("pattern")),u.xp6(8),u.Q6J("ngIf",F.hasError("pattern"))}},dependencies:[d.O5,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.c5,e.On,e.Mq,e.F,h.r,Z.g,i],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.form-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:500px}.form-group[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;margin-bottom:30px;width:45%}.form-label[_ngcontent-%COMP%]{margin-bottom:5px;padding-left:10px;font-size:12px;color:gray}.form-input[_ngcontent-%COMP%]{padding:5px 10px;border:1px solid gray;border-radius:5px;outline:none}"]});var E=r(1676);const k=[{path:"",component:g,data:{title:"\u0424\u043e\u0440\u043c\u044b"},children:[{path:"",redirectTo:"task-1",pathMatch:"full"},{path:"task-1",component:f,data:{title:"\u041d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0448\u0430\u0431\u043b\u043e\u043d\u043d\u044b\u043c\u0438 \u0444\u043e\u0440\u043c\u0430\u043c\u0438."}},{path:"task-2",component:E.x,data:{title:"\u041d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0440\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u044b, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u0445 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c \u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438. "}}]}];class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=u.oAB({type:l}),l.\u0275inj=u.cJS({imports:[a.Bz.forChild(k),a.Bz]});var C=r(5632);class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=u.oAB({type:s}),s.\u0275inj=u.cJS({imports:[d.ez]});class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=u.oAB({type:c}),c.\u0275inj=u.cJS({imports:[d.ez,e.u5,C.h,s]});class p{}p.\u0275fac=function(t){return new(t||p)},p.\u0275mod=u.oAB({type:p}),p.\u0275inj=u.cJS({imports:[d.ez,e.u5,C.h,e.UX,s]});class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275mod=u.oAB({type:m}),m.\u0275inj=u.cJS({imports:[d.ez,l,a.Bz,c,p]})}}]);