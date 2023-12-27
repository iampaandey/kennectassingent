import Link from "next/link"


const Nav = () => {
  return (
    <div className="main-nav">
      <Link href='/' className="home-nav">Home</Link>
      <Link href='/blogs' className="blog-nav">All Posts</Link>      
    </div>
  )
}

export default Nav
