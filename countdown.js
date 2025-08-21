const picker = document.getElementById('datetime');
const countDown = document.getElementById('countdown');

let timeinterval ; 

picker.addEventListener('change', ()=>{
    const selectedtime  = new Date(picker.value).getTime();

    if(isNaN(selectedtime)){
        countDown.textContent = "please enter a valid time";
        return;       
    }
    clearInterval(timeinterval);

    timeinterval = setInterval(()=>{
        const now = new Date().getTime();
        const gap = selectedtime - now ;

        

        if (gap <= 0){
            clearInterval(timeinterval)
            countDown.textContent = "Time's Up";
            return;
        }
         const days =Math.floor(gap/(60*60*24*1000));
         const hours= Math.floor((gap % (60*60*24*1000))/(60*60*1000));
         const minutes = Math.floor((gap%(1000*60*60))/(60*1000));
         const sec = Math.floor((gap%(1000*60))/(1000));
        
         countDown.innerHTML =
         ` <div class="flex gap-4">
        <div><strong>${String(days).padStart(2, '0')}</strong> Days</div>
        <div><strong>${String(hours).padStart(2, '0')}</strong> Hours</div>
        <div><strong>${String(minutes).padStart(2, '0')}</strong> Minutes</div>
        <div><strong>${String(sec).padStart(2, '0')}</strong> Seconds</div>
      </div>`;
    },1000);

});
