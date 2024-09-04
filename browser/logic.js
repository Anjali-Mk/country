class Landing{
    //property
    DATABASE = {
        "milan":{username:"milan", password:"milan123"},
        "Anu":{username:"Anu", password:"anu123"},
        "karthik":{username:"karthik", password:"karthik123"},
        "Jenni":{username:"Jenni", password:"jenni123"}
    }
    //method -to store data in local storgae
    save(){
        if(this.DATABASE){
            localStorage.setItem("database",JSON.stringify(this.DATABASE))
        }
    }
    getData(){
        this.DATABASE = JSON.parse(localStorage.getItem("database"))
    
    }
    register(){
        console.log('inside register function');
        console.log(reguser.value);
        console.log(regpsw.value);
        if(reguser.value==""||regpsw.value==""){
            alert('please fill the form completely')
        }
        else{
            if(reguser.value in this.DATABASE){
                alert('user already exist')
             }
             else{
                this.DATABASE[reguser.value] = {username:reguser.value , password:regpsw.value}
                console.log(this.DATABASE);
                alert('registeration successfull')
                this.save()
                //js navigation 
                window.location="login.html"
                
             }
            }
        }
    login(){
        console.log('inside login function');
        console.log(loginuser.value);
        console.log(loginpsw.value);
        if(loginuser.value==""||loginpsw.value==""){
            alert("please fill the form completely")
        }
        else{
            this.getData()
            if(loginuser.value in this.DATABASE){
                if(this.DATABASE[loginuser.value].password == loginpsw.value){
                    localStorage.setItem ("user",loginuser.value)
                    alert("login successfully")
                    window.location="home.html"
                }
                else{
                    alert("invalid username or password")
                }
            }
            else{
                alert("user doesnot exist")
            }
        }
        
        
        
    }    


}

const obj = new Landing()
obj.getData()