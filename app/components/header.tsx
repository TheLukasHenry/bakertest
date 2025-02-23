'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Search, ShoppingCart, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

function SearchBar() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search products... (⌘K)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 border-gray-200 focus:border-[#B31B1B] focus:ring-[#B31B1B]"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      </div>
    </form>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Handle cmd+k keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Baker Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold text-[#B31B1B]">Baker</span>
          </Link>

          <SearchBar />

          <div className="flex items-center w-[200px] justify-end">
            <Dock
              className="items-end"
              magnification={50}
              distance={100}
              panelHeight={40}
            >
              <DockItem className="aspect-square rounded-full">
                <DockLabel>Theme</DockLabel>
                <DockIcon>
                  <ThemeToggle />
                </DockIcon>
              </DockItem>

              <DockItem className="aspect-square rounded-full">
                <DockLabel>Account</DockLabel>
                <DockIcon>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-[#B31B1B]"
                      >
                        <User className="h-5 w-5 text-foreground" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem asChild>
                        <Link
                          href="/account/profile"
                          className="hover:text-[#B31B1B]"
                        >
                          Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/account/orders"
                          className="hover:text-[#B31B1B]"
                        >
                          Orders
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/account/settings"
                          className="hover:text-[#B31B1B]"
                        >
                          Settings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-[#B31B1B] hover:text-[#B31B1B]/90">
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </DockIcon>
              </DockItem>

              <DockItem className="aspect-square rounded-full">
                <DockLabel>Cart</DockLabel>
                <DockIcon>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:text-[#B31B1B]"
                  >
                    <Link href="/cart" className="relative">
                      <ShoppingCart className="h-5 w-5 text-foreground" />
                      <Badge
                        variant="destructive"
                        className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-[#B31B1B]"
                      >
                        0
                      </Badge>
                    </Link>
                  </Button>
                </DockIcon>
              </DockItem>
            </Dock>
          </div>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search products..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem
              onSelect={() => {
                router.push('/hvac')
                setOpen(false)
              }}
            >
              <Search className="mr-2 h-4 w-4" />
              HVAC Equipment
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push('/parts')
                setOpen(false)
              }}
            >
              <Search className="mr-2 h-4 w-4" />
              Parts & Accessories
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push('/tools')
                setOpen(false)
              }}
            >
              <Search className="mr-2 h-4 w-4" />
              Tools & Instruments
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  )
}
