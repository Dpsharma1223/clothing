"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, ShoppingBag, Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  badge?: number;
}

export default function BottomNav() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { href: "/", label: "Home", icon: Home },
    { href: "/myAccount", label: "Account", icon: User },
    { href: "/shopPage", label: "Shop", icon: ShoppingBag },
    { href: "/wishlist", label: "Wishlist", icon: Heart, badge: 3 },
    { href: "/cart", label: "Cart", icon: ShoppingCart, badge: 2 },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50 py-2">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center relative w-full"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${
                  isActive ? "text-black" : "text-dark-grey"
                }`}
              >
                {/* Icon */}
                <Icon className="w-6 h-6" />

                {/* Badge */}
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute top-0 ml-3 -mt-1.5 translate-x-1/2 bg-red text-white text-xs rounded-full px-1.5 py-0.5">
                    {item.badge}
                  </span>
                )}

                {/* Label */}
                <span className="text-xs mt-1">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}