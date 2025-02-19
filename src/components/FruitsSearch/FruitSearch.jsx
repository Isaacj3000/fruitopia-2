import React from 'react'
import { show } from '../../services/fruitService';

function FruitSearch() {
    const [fruit, setFruit] = useState('');
    const [fruitData, setFruitData] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fruit.trim()) return
         try {
            const data = await show(fruit);
            setFruit(data);
        } catch (error) {
            console.error("Error fetching Fruit data:", error);
        }
        setFruit('');
    }
    console.log(fruitData, "data from search");
  return (
    <div>
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fruit">Enter a fruit:</label>
                <input 
                type="text" 
                name='fruit' 
                value={fruit}
                id='fruit'
                onChange={(e) => setFruit(e.target.value)}
                />
            </form>
        </section>
    </div>
  )
}

export default FruitSearch