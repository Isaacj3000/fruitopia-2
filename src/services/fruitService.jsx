const BASE_URL = 'http://localhost:3800/fruits';
export const getAllFruits = async () => {
try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
} catch (error) {
    console.error('Error fetching all fruits:', error);
    return [];
    
}
}

export const show = async (fruit) => {
    try {
        const res = await fetch(`${BASE_URL}?name=${fruit.id}`);
        const data = await res.json();
        const seletedFruit = data.find(item => item.name.toLowerCase() === fruit.toLowerCase());
        if (seletedFruit) {
            console.log('selected fruit Data', seletedFruit);
            return seletedFruit;
        }
    } catch (error) {
        console.error('Error fetching fruit:', error);
        return null;
    }
}