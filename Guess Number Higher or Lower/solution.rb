def guessNumber(n)
    return n if n == 1
    
    left_p = 0
    right_p = n
    
    while left_p <= right_p
        mid = (left_p + right_p) / 2

        if guess(mid).zero?
            return mid
        elsif guess(mid) == -1
            right_p = mid - 1
        else
            left_p = mid + 1
        end
    end
end