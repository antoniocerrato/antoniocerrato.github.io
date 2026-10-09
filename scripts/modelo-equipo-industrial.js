// Ejercicio original: cálculo reproducible sin dependencias.
// Ejecutar: node scripts/modelo-equipo-industrial.js
function modeloEquipoIndustrial() {
 const inversion=12000000, residual=1200000, venta=1000000, impuesto=.25, tasa=.10;
 const amortizacion=(inversion-residual)/5;
 const filas=[{anio:0,flujo:-inversion,actualizado:-inversion,acumulado:-inversion,acumuladoActualizado:-inversion}];
 for(let anio=1;anio<=5;anio++){
  const cantidad=10000*1.08**Math.min(anio-1,2),precio=1000*1.06**(anio-1),variableUnitario=500*1.04**(anio-1),fijo=2000000*1.03**(anio-1);
  const ingresos=cantidad*precio,variable=cantidad*variableUnitario,coste=variable+fijo,antes=ingresos-coste;
  const valorContable=inversion-amortizacion*anio,resultadoVenta=anio===5?venta-valorContable:0,base=antes-amortizacion+resultadoVenta,tax=base*impuesto;
  const impuestoOperativo=(antes-amortizacion)*impuesto,flujoOperativo=antes-impuestoOperativo,despues=antes-tax,cobroVenta=anio===5?venta:0,flujo=despues+cobroVenta,actualizado=flujo/(1+tasa)**anio;
  filas.push({anio,cantidad,precio,variableUnitario,fijo,ingresos,variable,coste,antes,amortizacion,valorContable,resultadoVenta,base,tax,impuestoOperativo,flujoOperativo,despues,cobroVenta,flujo,actualizado,acumulado:filas[anio-1].acumulado+flujo,acumuladoActualizado:filas[anio-1].acumuladoActualizado+actualizado});
 }
 const van=r=>filas.reduce((s,f)=>s+f.flujo/(1+r)**f.anio,0);
 let lo=0,hi=1;for(let k=0;k<100;k++){let r=(lo+hi)/2;if(van(r)>0)lo=r;else hi=r;}
 return {filas,van:van(tasa),tir:(lo+hi)/2,van18:van(.18),van20:van(.20),tirInterpolada:.18+van(.18)/(van(.18)-van(.20))*.02,payback:3-filas[3].acumulado/filas[4].flujo,paybackConvencional:4-filas[4].acumuladoActualizado/filas[5].actualizado,paybackOperativo:4-filas[4].acumuladoActualizado/(filas[5].flujoOperativo/1.1**5)};
}
console.log(JSON.stringify(modeloEquipoIndustrial(),null,2));
