//Premitive Types
// var num1:number=12;
// var num2:string="ccs";
// var num3:boolean=false;









// Interface
/*interface User{
     name:string,
     email:string,
     mobileNumber:string,
     password:string,
     gender?:string //Adding Question mark will make the key optional
}

function InterfaceFun(obj:User) {
    
}
InterfaceFun({name:"Vikas",email:"vikas@gmnail.com",mobileNumber:"977839880",password:"Vikas@123",})

interface admin extends User{
    admin:boolean 
}*/



//TYPE ALIEAS
/* type customType = number | boolean;
type User = {
  name: string;
  email: string;
}; */



//TYPE INTERSECTION
/* type admin = User & {
  getUserDeatils(): void;
};

function typeIntersection(A: admin) {
  A.getUserDeatils;
} */
