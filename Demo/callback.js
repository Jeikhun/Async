const mail="ceyhunjalil@mail.ru";
const password = "1234";

function getIdByAuth (mail , password , truee){
    setTimeout(()=> { 
        if(mail==="ceyhunjalil" && password === "1234"){
            const data = {ID: 111};
            return truee(data)
        }
        else{
            return { err: "No user info!" }
        }
        
    }, 3000)
} 

getIdByAuth(mail,password, (data) => {
    console.log("your id- ", data.ID)
});