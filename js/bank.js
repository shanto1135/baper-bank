// ১, ডিপজিট বাটন এড করা
document.getElementById('deposit-btn').addEventListener('click', function(){
    // ডিপজিট ইনপুট কে গেট করা
   const depositInput = document.getElementById('deposit-input')
   const  inputvalue = depositInput.value;
   const depositInputNumber = parseFloat(inputvalue)

    // ডিপজিট রেজাল্ট


   const pTagGet = document.getElementById('depo-total');
   const pTagSet = pTagGet.innerText;
   const dipositTotalNumber = parseInt(pTagSet);
   pTagGet.innerText = dipositTotalNumber+depositInputNumber;

//    clear input
depositInput.value = '';

  // ডিপজিট রেজাল্ট এর টাকা মোট বালান্সে এড
  const totalbalance = document.getElementById('balanceTotal');
  const totalbalanceText = totalbalance.innerText;
  const  totalbalanceNumber = parseFloat(totalbalanceText);
 
  totalbalance.innerText =totalbalanceNumber +depositInputNumber;
// console.log(totalbalanceNumber);

})

        // withdraw part
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInputAdd = document.getElementById('withdraw-amount')
    ;
    const withdrawInputValue = withdrawInputAdd.value;
    const withdrawInpuNumber = parseFloat(withdrawInputValue)
    ;
        //   withdraw output add
    const withdrawOutputGet = document.getElementById('withdraw-total');
    const  withdrawOutputInner = withdrawOutputGet.innerText;
    const  withdrawOutputNumber = parseFloat(withdrawOutputInner);
    withdrawOutputGet.innerText =  withdrawOutputNumber + withdrawInpuNumber;
    // clear text
    withdrawInputAdd.value = '';

                   // withdraw - total p tag add 
    const totalbalanceget = document.getElementById('balanceTotal');
    const totalbalanceInner = totalbalanceget.innerText;
    const totalbalanceNumber = parseFloat(totalbalanceInner);
    totalbalanceget.innerText = totalbalanceNumber - withdrawInpuNumber;
    
})