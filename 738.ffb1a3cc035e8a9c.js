"use strict";(self.webpackChunkuser_app=self.webpackChunkuser_app||[]).push([[738],{738:(m,d,s)=>{s.r(d),s.d(d,{UserModule:()=>f});var g=s(783),e=s(223),c=s(78),o=s(808);function a(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",10),e.NdJ("click",function(){const h=e.CHM(t).$implicit;return e.oxw(2).visitFriend(h)}),e._UZ(2,"img",3),e.TgZ(3,"div"),e.TgZ(4,"div"),e._uU(5),e.qZA(),e.TgZ(6,"div"),e._uU(7),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=i.$implicit;e.xp6(2),e.s9C("src",t.imageUrl,e.LSH),e.xp6(3),e.lnq("",t.prefix," ",t.name," ",t.lastName,""),e.xp6(2),e.Oqu(t.title)}}function l(n,i){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"div",2),e._UZ(2,"img",3),e.TgZ(3,"div",4),e.TgZ(4,"div",5),e._uU(5,"Info"),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"div",6),e._uU(8),e.qZA(),e.TgZ(9,"div"),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"div"),e.TgZ(12,"div"),e._uU(13),e.qZA(),e.TgZ(14,"div"),e._uU(15),e.qZA(),e.TgZ(16,"div"),e._uU(17),e.qZA(),e.TgZ(18,"div"),e._uU(19),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"div",7),e.TgZ(21,"div",5),e._uU(22,"Adress"),e.qZA(),e.TgZ(23,"div"),e._uU(24),e.qZA(),e.TgZ(25,"div"),e._uU(26),e.qZA(),e.TgZ(27,"div"),e._uU(28),e.qZA(),e.TgZ(29,"div"),e._uU(30),e.qZA(),e.TgZ(31,"div"),e._uU(32),e.qZA(),e.TgZ(33,"div"),e._uU(34),e.qZA(),e.qZA(),e.qZA(),e.TgZ(35,"div"),e.TgZ(36,"h2"),e._uU(37,"Friends:"),e.qZA(),e.qZA(),e.TgZ(38,"div",8),e.YNc(39,a,8,5,"div",9),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.s9C("src",t.user.imageUrl,e.LSH),e.xp6(6),e.lnq("",t.user.prefix," ",t.user.name," ",t.user.lastName,""),e.xp6(2),e.Oqu(t.user.title),e.xp6(3),e.hij("Email: ",t.user.email,""),e.xp6(2),e.hij("Ip Address: ",t.user.ip,""),e.xp6(2),e.hij("Job Area: ",t.user.jobArea,""),e.xp6(2),e.hij("Job Type: ",t.user.jobType,""),e.xp6(5),e.Oqu(t.user.company.name),e.xp6(2),e.hij("City: ",t.user.address.city,""),e.xp6(2),e.hij("Country: ",t.user.address.country,""),e.xp6(2),e.hij("State: ",t.user.address.state,""),e.xp6(2),e.hij("Street Address: ",t.user.address.streetAddress,""),e.xp6(2),e.hij("Zip: ",t.user.address.zipCode,""),e.xp6(5),e.Q6J("ngForOf",t.friends)}}function u(n,i){1&n&&e._UZ(0,"div",11)}let p=(()=>{class n{constructor(t,r){this.getUsersService=t,this.router=r,this.friends=[],this.page=1,this.loading=!1,this.scroll=()=>{window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&this.fetchFriends()}}ngOnInit(){window.addEventListener("scroll",this.scroll,!0),this.user?setTimeout(()=>this.getFullUserDetails(),500):this.getFullUserDetails()}ngOnDestroy(){window.removeEventListener("scroll",this.scroll,!0)}visitFriend(t){this.getUsersService.fetchFullUser(+t.id),this.redirectTo(`/user/${t.id}`)}getFullUserDetails(){this.getUsersService.getFullUserDetails().subscribe(t=>{this.user=t,this.fetchFriends()})}redirectTo(t){this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>this.router.navigate([t]))}fetchFriends(){this.loading=!0,this.getUsersService.fetchFriends(this.user.id,this.page),this.page++,this.getUsersService.getFriends().subscribe(t=>this.friends=[...this.friends,...t.list]),this.loading=!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.K),e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","spin",4,"ngIf"],["id","user"],["alt","",3,"src"],[1,"info"],[1,"title"],[1,"fullName"],[1,"address"],[1,"friends"],[4,"ngFor","ngForOf"],[1,"friendInfo",3,"click"],[1,"spin"]],template:function(t,r){1&t&&(e.YNc(0,l,40,16,"div",0),e.YNc(1,u,1,0,"div",1)),2&t&&(e.Q6J("ngIf",r.user),e.xp6(1),e.Q6J("ngIf",r.loading))},directives:[o.O5,o.sg],styles:["#user[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-bottom:40px}#user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:20px;max-width:300px;height:auto;width:87%}#user[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:30rem;height:203px;margin:0 20px;padding:20px;border:1px solid black}#user[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:20px;text-align:center}#user[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .fullName[_ngcontent-%COMP%]{font-weight:700}#user[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{margin:20px;border:1px solid black;padding:20px}#user[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:20px;text-align:center}#user[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){font-weight:700}div[_ngcontent-%COMP%]:nth-child(2)   h2[_ngcontent-%COMP%]{font-weight:700}.friends[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;margin:0 3%}.friends[_ngcontent-%COMP%]   .friendInfo[_ngcontent-%COMP%]{cursor:pointer;border:1px solid black;max-width:80%;margin:1rem 0}.friends[_ngcontent-%COMP%]   .friendInfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;width:auto}.friends[_ngcontent-%COMP%]   .friendInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:5px 0 5px 5px}.friends[_ngcontent-%COMP%]   .friendInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{font-weight:700}.spin[_ngcontent-%COMP%]{display:block;width:40px;height:40px;margin:30px auto;border:3px solid transparent;border-radius:50%;border-top-color:#f80;animation:spin 1s ease infinite}@keyframes spin{to{transform:rotate(360deg)}}@media only screen and (max-width: 1000px){.friends[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}}@media only screen and (max-width: 700px){.friends[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media only screen and (max-width: 400px){.friends[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[o.ez,g.Bz.forChild([{path:"",component:p}])]]}),n})()}}]);