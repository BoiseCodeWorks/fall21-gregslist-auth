import{A as a,c as e,p as s,e as t,D as l,d as r,o as c,a as d,b as i,u as n,E as o,t as m,i as u}from"./vendor.1a86e924.js";import{c as b,P as p,r as v,A as g}from"./index.a970800f.js";const y={setup(){const s=l();return a((()=>{b.getCarById(s.params.carId)})),{account:e((()=>g.account)),car:e((()=>g.car)),bids:e((()=>g.bids)),topBidder:e((()=>g.bids[0])),async remove(a){try{if(!(await p.confirm("Are you really sure?")))return;await b.removeCar(a.id),v.push({name:"Cars"})}catch(e){p.toast(e.message)}}}}},f=u();s("data-v-3e082000");const h={key:0,class:"py-4"},x={class:"container"},w={class:"row"},k={class:"col-lg-8 m-auto"},B={class:"row"},C={class:"col-lg-8 m-auto"},j={class:"bg-white rounded p-4 elevation-2"},I={class:"car-details"},A={class:"d-flex align-items-center justify-content-between text-capitalize"},_={class:"mt-3 pt-3 border-top"},D={class:"car-bids"},E={key:0,class:"highest-bidder d-flex align-items-center justify-content-between"},F={class:"d-flex align-items-center"},$={class:"m-0"},z={class:"seller-info mt-3"},L=i("p",null,[i("b",null,"Contact Seller")],-1),M={class:"d-flex clip-text align-items-center"},P={class:"ms-3"},R=i("i",{class:"mdi mdi-account"},null,-1),S={key:0,class:"row my-4"},T={class:"col-lg-8 m-auto"},q={class:"bg-white rounded elevation-2 p-4 border-danger border"},G={class:"d-flex justify-content-between"},H=i("b",null," Remove Listing ",-1),J=i("button",{class:"btn text-danger lighten-20 selectable","data-bs-toggle":"modal","data-bs-target":"#edit-modal"},[i("i",{class:"mdi mdi-pencil"}),i("b",null," EDIT ")],-1),K={key:1};t();const N=f(((a,e,s,t,l,u)=>{const b=r("Car"),p=r("CarBidForm"),v=r("CarForm"),g=r("Modal");return t.car?(c(),d("div",h,[i("div",x,[i("div",w,[i("div",k,[i(b,{car:t.car},null,8,["car"])])]),i("div",B,[i("div",C,[i("div",j,[i("div",I,[i("h3",A,[i("span",null,n(t.car.year)+" "+n(t.car.make)+" - "+n(t.car.model),1),i("span",null,"$"+n(t.car.price),1)]),i("p",_,n(t.car.description),1)]),i("div",D,[t.topBidder?(c(),d("div",E,[i("div",F,[i("h1",null,"$"+n(t.topBidder.bid),1),i("img",{src:t.topBidder.bidder.picture,alt:"",height:"45",class:"rounded-circle ms-3",title:t.topBidder.bidder.name},null,8,["src","title"])]),i("div",null,[i("p",$,[i("kbd",null," Bids: "+n(t.bids.length),1)])])])):o("",!0)]),i(p,{car:t.car},null,8,["car"]),i("div",z,[L,i("div",M,[i("img",{src:t.car.creator.picture,alt:"",class:"rounded",height:"40"},null,8,["src"]),i("b",P,[R,m(" "+n(t.car.creator.name),1)])])])])])]),t.car.creatorId===t.account.id?(c(),d("div",S,[i("div",T,[i("div",q,[i("div",G,[i("button",{class:"btn text-dark lighten-20 selectable",onClick:e[1]||(e[1]=a=>t.remove(t.car))},[H]),J])])])])):o("",!0)]),i(g,{id:"edit-modal"},{"modal-title":f((()=>[m(n(t.car.year)+" "+n(t.car.make)+" - "+n(t.car.model),1)])),"modal-body":f((()=>[i(v,{car:t.car},null,8,["car"])])),_:1})])):(c(),d("div",K," loading..... "))}));y.render=N,y.__scopeId="data-v-3e082000";export default y;
