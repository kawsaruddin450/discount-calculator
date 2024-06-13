document.getElementById('btn-submit').addEventListener('click', function () {
    const couponInput = document.getElementById('coupon');
    const coupon = couponInput.value;

    if (coupon === "DISC30") {
        const initialPrice = parseFloat(document.getElementById('initial-price').innerText);
        const finalPrice = document.getElementById('final-price');
        finalPrice.innerText = initialPrice - (initialPrice * 0.3);
    }
    else{
        alert('Please enter a valid coupon!!!');
    }
    couponInput.value = '';
})