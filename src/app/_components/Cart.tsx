export const Cart = () => {
    return <>
        <label htmlFor="items">Cart</label>
        <select name="items" id="items">
            <option value="1">Will loop through redux cart state</option>
            <option value="1">Which is updated when a new item/quantity is added</option>
            <option value="1">So yeah</option>
        </select>
    </>
}