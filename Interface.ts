// Interface
interface User{
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
}