const API_END_POINT = './src/data.json';

const cache = {};

export const api_req = async () => {
    const res = await fetch(API_END_POINT);
    if (!res.ok) {
        throw new Error('데이터 안받아옴');
    }
    return res.json();
};

export const getData = async () => {
    if (Object.keys(cache).length === 0) {
        const data = await api_req();
        cache[5] = { 1: [data[0]] };
        cache[15] = { 1: [data[0]] };

        for (let i = 1; i < 25; i++) {
            const five_quotient = divmod(i + 1, 5);
            const fifteen_quotient = divmod(i + 1, 15);
            if (cache[5][five_quotient] === undefined)
                cache[5][five_quotient] = [];
            if (cache[15][fifteen_quotient] === undefined)
                cache[15][fifteen_quotient] = [];

            cache[5][five_quotient].push(data[i]);
            cache[15][fifteen_quotient].push(data[i]);
        }
    }

    return cache;
};

function divmod(dividend, divisor) {
    const quotient = Math.ceil(dividend / divisor);
    return quotient;
}

// 5
// 1: [0,1,2,3,4]
// 2: [5,6,7,8,9]
// 5: [20,21,22,23,24]

// 15
// 1: [0,1,2,3,...,14]
// 2: [15,...,24]
