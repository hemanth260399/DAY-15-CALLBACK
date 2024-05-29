let ele=document.createElement("div")
document.body.append(ele)
let ten=function(callback){
    setTimeout(()=>{
        ele.innerHTML=10
        callback()
    },1000)
}
let nine=function(callback){
    setTimeout(()=>{
        ele.innerHTML=9
        callback()
    },1000)
}
let eight=function(callback){
    setTimeout(()=>{
        ele.innerHTML=8
        callback()
    },1000)
}
let seven=function(callback){
    setTimeout(()=>{
        ele.innerHTML=7
        callback()
    },1000)
}
let six=function(callback){
    setTimeout(()=>{
        ele.innerHTML=6
        callback()
    },1000)
}
let five=function(callback){
    setTimeout(()=>{
        ele.innerHTML=5
        callback()
    },1000)
}
let four=function(callback){
    setTimeout(()=>{
        ele.innerHTML=4
        callback()
    },1000)
}
let three=function(callback){
    setTimeout(()=>{
        ele.innerHTML=3
        callback()
    },1000)
}
let two=function(callback){
    setTimeout(()=>{
        ele.innerHTML=2
        callback()
    },1000)
}
let one=function(callback){
    setTimeout(()=>{
        ele.innerHTML=1
        callback()
    },1000)
}
let final=function(callback){
    setTimeout(()=>{
        ele.innerHTML="HAPPY INDEPENDENCE DAY"
        callback()
    },1000)
}
ten(a=function(){
    nine(b=function(){
        eight(c=function(){
            seven(d=function(){
                six(e=function(){
                    five(f=function(){
                        four(g=function(){
                            three(h=function(){
                                two(i=function(){
                                    one(j=function(){
                                        final(m=function(){
                                            console.log("task completed")
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})