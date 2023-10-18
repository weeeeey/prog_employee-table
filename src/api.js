const API_END_POINT = './src/data.json';

export const getData = async () => {
    const res = await fetch(API_END_POINT);
    if (!res.ok) {
        throw new Error('데이터 안받아옴');
    }
    return res.json();
};
