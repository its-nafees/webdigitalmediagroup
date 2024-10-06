
// counter design
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id, start , end, duration){
        let obj = document.getElementById(id),
        current =start,
        range = end - start, 
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1",100,600,2000);
    counter("count2",1,20,3000);
    counter("count3",500,800,4000);
    counter("count4",0,1000,2000);
});


