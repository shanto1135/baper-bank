// ১, যার মাধ্যমে আউটপুট নিবো তাকে ইভেনহেন্ডেলার হিসাবে এড করা, মানে সাবমিট বাটিন..

document.getElementById('submit-btn').addEventListener('click', function(){
    // ২, যার থেকে ইমেল নিবো তাকে গেট করা
   const emailField = document.getElementById('user-email')
   ;
   const emailValue = emailField.value;
   
//    ৩, যার থেকে পাসওয়ার্ড গেট করা
   const passFild = document.getElementById('user-password')
   ;
   const passValue = passFild.value;

    // ৪, pass & email ঠিক হলে নিউ পেইজে নিয়ে যাওয়া
   if(emailValue == 'shanto@gmail.com' &&  passValue == 'abc'){
       window.location.href = 'bankcalculation.html'
   }
   else{
       const errorText = document.getElementById('error-msg');
       errorText.style.display = 'block';
   }
})







