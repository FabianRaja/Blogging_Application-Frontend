export default function Navbar(){
    return(
        <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl">BLOGS</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a className="text-l">CREATE BLOG</a></li>
                    <li><a className="text-l">MY BLOGS</a></li>
                    </ul>
                </div>
            </div>
    )
}