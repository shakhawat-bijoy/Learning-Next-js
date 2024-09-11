import Link from "next/link"


export default function Home(){
    return (
        <>
            <h1>Hello World</h1>
            
            <Link href="/blog" className="py-5 bg-black">Blog</Link>
            <br />
            <Link href="/products">Products</Link>
            <br />
            <Link href="/register">Register</Link>
            <br />
            <Link href="/dashboard">Dashboard</Link>
        </>
    )
}