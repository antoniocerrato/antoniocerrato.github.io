// Modelo docente. Importes en euros. Sin dependencias.
// Ejecutar con Node.js: node scripts/modelo-prefabricados.js
function model(o={}) {
 const p={price:150,variable:92,purchases:78,fixed:1600000,priceGrowth:.02,costGrowth:.025,fixedGrowth:.02,daysCustomers:60,daysStock:30,daysSuppliers:45,tax:.25,rate:.10,volume:1,capexFactor:1,terminal:3400000,close:150000,...o};
 const quantities=[60000,70000,80000,85000,85000,85000,85000,85000,85000,85000].map(q=>q*p.volume);
 const initialStock=quantities[0]*p.purchases*p.daysStock/365;
 const capex=12000000*p.capexFactor;
 const rows=[{year:0,fcf:-capex-initialStock,equity:-capex-initialStock+6000000,wc:initialStock}];
 let debt=6000000, cumulative=rows[0].fcf, discounted=cumulative;
 for(let t=1;t<=10;t++){
  const q=quantities[t-1], price=p.price*(1+p.priceGrowth)**(t-1), variable=p.variable*(1+p.costGrowth)**(t-1), purchase=p.purchases*(1+p.costGrowth)**(t-1), fixed=p.fixed*(1+p.fixedGrowth)**(t-1);
  const sales=q*price,cv=q*variable,buys=q*purchase, ebitda=sales-cv-fixed;
  const da=1030000*p.capexFactor,ebit=ebitda-da,tax=ebit*p.tax;
  const clients=sales*p.daysCustomers/365,stock=buys*p.daysStock/365,suppliers=buys*p.daysSuppliers/365,wc=clients+stock-suppliers,delta=wc-rows[t-1].wc;
  const replacement=([4,8].includes(t)?800000:0)*p.capexFactor;
  const book= (12000000+([4,5,6,7].includes(t)?800000:t>=8?1600000:0)-1030000*t)*p.capexFactor;
  const terminal=t===10?p.terminal-p.close-(p.terminal-p.close-book)*p.tax:0;
  const fcf=ebitda-tax-delta-replacement+terminal+(t===10?wc:0);
  const interest=debt*.05,principal=t>=2&&t<=7?1000000:0,service=interest+principal;
  const equity=fcf-interest*(1-p.tax)-principal;
  const cfads=ebitda-(ebit-interest)*p.tax-delta-replacement;
  cumulative+=fcf;discounted+=fcf/(1+p.rate)**t;
  rows.push({year:t,q,price,variable,purchase,fixed,sales,cv,buys,ebitda,da,ebit,tax,clients,stock,suppliers,wc,delta,replacement,book,terminal,fcf,discount:fcf/(1+p.rate)**t,cumulative,discounted,debt,interest,principal,service,cfads,dscr:service?cfads/service:null,equity});
  debt-=principal;
 }
 const flows=rows.map(r=>r.fcf);
 const npv=(f,r)=>f.reduce((s,v,t)=>s+v/(1+r)**t,0);
 const irr=f=>{let lo=-.9,hi=2;for(let i=0;i<150;i++){let m=(lo+hi)/2;if(npv(f,m)>0)lo=m;else hi=m;}return(lo+hi)/2};
 const payback=(r)=>{let s=flows[0];for(let t=1;t<=10;t++){const f=flows[t]/(1+r)**t;const regular=(flows[t]-(t===10?rows[t].terminal+rows[t].wc:0))/(1+r)**t;if(s+regular>=0)return t-1-s/regular;if(s+f>=0)return t;s+=f;}return null};
 return {p,initialStock,rows,npv:npv(flows,p.rate),irr:irr(flows),equityIrr:irr(rows.map(r=>r.equity)),equityNpv:npv(rows.map(r=>r.equity),.1625),payback:payback(0),discountedPayback:payback(p.rate),minDscr:Math.min(...rows.slice(1,8).map(r=>r.dscr)),breakEvenAccounting:(p.fixed+1030000*p.capexFactor)/(p.price-p.variable),npvNoTerminal:npv(flows,p.rate)-rows[10].terminal/(1+p.rate)**10};
}
console.log(JSON.stringify(model(),null,2));
