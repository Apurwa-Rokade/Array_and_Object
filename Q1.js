// 1. In the following shopping cart add, re9ove, and edit ite9s
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', '$one>'#
// 8 a"" 'Meat' in the beginning of >our shopping cart if it has not been alrea"> a""e!
// 8 a"" Sugar at the en" of >ou shopping cart if it has not been alrea"> a""e!
// 8 remove '$one>' if >ou are allergic to hone=
// 8 mo"if> Tea to 'Green Tea'a

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'honey'];
const Allergy =true;

if(!shoppingCart.includes('meat')){
shoppingCart.unshift('meat');
}
if(!shoppingCart.includes('sugar')){
  shoppingCart.push('sugar');
  }
if(Allergy){
  const honeyindex = shoppingCart.indexOf("honey");
  shoppingCart.splice(honeyindex,1);
}

if(shoppingCart.includes('Tea')){
  const index = shoppingCart.indexOf("Tea");
  shoppingCart[index]= "Green Tea";
}


console.log(shoppingCart)

