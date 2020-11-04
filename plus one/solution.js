var plusOne = function(digits) {
    if (digits[digits.length - 1] !== 9){
        digits[digits.length - 1] = digits[digits.length - 1] + 1
    } else {
        for(let i = digits.length - 1; i >= 0; i--){
            if (digits[i] === 9){
                digits[i] = 0
            } else {
                digits[i] = digits[i] + 1
                break
            }
        }
        if(digits[0] === 0){
            digits.splice(0, 0, 1)
        }
    }
    return digits
}