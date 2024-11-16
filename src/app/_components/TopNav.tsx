import Link from 'next/link'
import { Cart } from './Cart'

export const TopNav = () => {
    return (
        <>
            <div>
                <div><p className="text-3xl font-bold underline">Free Shipping on U.S Orders of $50 & Up</p></div>
                <div>
                    <Link href="/">All Curls</Link>
                    {/* will take to login page. Will ask user if has account there */}
                    <Link href="/login">Login</Link>
                    {/* Will display amt of items at all times. Drop down of items when clicked. 
                    Should be own component?*/}
                    <Cart></Cart>
                </div>
            </div>
        </>
    )
}