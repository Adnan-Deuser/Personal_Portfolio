import { useEffect, useState } from "react"
import { Button } from "@/Components/Button"
import { Menu, X } from "lucide-react"
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#project", label: "Project" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonial", label: "Testemonial" }
]


export const NavBar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return <header className={`fixed top-0 left-0 right-0 transition-all ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between ">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                Portfolio<span className="text-primary text-2xl">.</span>
            </a>

            {/*desktop*/}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((unlink, ind) => (
                        <a href={unlink.href} key={ind} className="px-4 py-2 text-sm color text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                            {unlink.label}
                        </a>
                    ))}
                </div>
            </div>
            <div className="hidden md:block">
                <a href="#contact"><Button size="sm">Contact Me</Button></a>
            </div>


            {/*Mobile*/}
            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenu((prev) => !prev)}>
                {isMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenu && (<div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((unlink, ind) => (
                    <a href={unlink.href} key={ind}
                        onClick={() => setIsMobileMenu(false)}
                        className="text-lg text-muted-foreground hover:text-foreground py-2">
                        {unlink.label}
                    </a>
                ))}
                <a href="#contact">
                    <Button className="cursor-pointer"
                        onClick={() => setIsMobileMenu(false)}>Contact Me</Button>
                </a>
            </div>
        </div>
        )}


    </header>
}