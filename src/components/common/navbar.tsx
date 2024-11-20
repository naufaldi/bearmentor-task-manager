import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils';

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  console.log("navbar location", pathname);
  return (
    <>
      <NavigationMenu className='container mx-auto p-4'>
        <NavigationMenuList>
          <NavigationMenuItem >
            <Link to="/habbit" >
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === "/habbit" ? "bg-blue-500" : "")}>
                Habbits
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/habbit/add"  >
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === "/habbit/add" ? "bg-blue-500" : "")}>
                Add Habbit
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about"  >
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === "/about" ? "bg-blue-500" : "")}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

    </>
  )
}

export default Navbar