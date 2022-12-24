window.addEventListener("loadstart", () =>{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        // document.write("mobile device");
        // alert('mobile')
        document.querySelector('body').classList.add('mobile-true')
    }else{
        // false for not mobile device
        document.querySelector('body').classList.add('mobile-false')
        // alert('desktop')
    }
})