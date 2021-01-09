function intersection(nums1: number[], nums2: number[]): number[] {
    const filteredArray = [...new Set(nums1.filter(value => nums2.includes(value)))];
    return filteredArray
};

