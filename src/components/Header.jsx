import { Link } from "react-router-dom";
import Container from "./ui/container";
import { Button } from "./ui/button";
import {ShoppingCart} from 'lucide-react'
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const routes = [
    {
        href : "/",
        label : "Products"
    },
    {
        href : "/",
        label : "Categories"
    },
    {
        href : "/",
        label : "On sale"
    },
];

export default function Header() {
   
    return (
        <header className="sm:flex sm:justify-between py-3 px-4 border-4 sticky top-0 z-30 bg-white dark:text-white dark:bg-black">
          <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                <div className="flex items-center">
                <Sheet>
                    <SheetTrigger>
                        <Menu className="h-6 md:hidden w-6" />
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4">
                        {routes.map((route, i) => (
                            <Link
                            key={i}
                            href={route.href}
                            className="block px-2 py-1 text-lg"
                            >
                            {route.label}
                            </Link>
                        ))}
                        </nav>
                    </SheetContent>
                </Sheet>
                    <Link to={"/"} className="ml-4 lg:ml-0"> 
                        <h1 className="text-xl font-bold">STORE NAME</h1>
                    </Link>
                </div>
                <nav className="mx-6 md:flex items-center space-x-4 lg:space-x-6 hidden md:bloack">
                    {
                        routes.map((route, i)=> (
                            <Button  variant="ghost"> 
                                <Link 
                                    key={i}
                                    to={route.href}
                                    className="text-sm font-medium transition-colors"
                                >
                                    {route.label}
                                </Link>
                            </Button>
                        ))
                    }
                </nav>
                <div className="flex items-center">
                    <Button 
                        variant='ghost'
                        size="icon"
                        className='mr-2'
                        aria-label='Shopping Cart'    
                    >
                        <ShoppingCart className="h-6 w-6" color="#000000" />
                        <span className="sr-only">Shopping Cart</span>
                    </Button>
                    <Button 
                        variant='ghost'
                        size='icon'
                        aria-label='Toggle Theme'
                        className='mr-6'
                        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-90" />
                        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle Theme</span>
                    </Button>
                    <ProfileButton />
                </div>
            </div>
          </Container>
       </header>
    )
}