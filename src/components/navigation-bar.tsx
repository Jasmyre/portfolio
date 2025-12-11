"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  ChevronRight,
  GalleryVerticalEnd,
  Home,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import type { ReactNode } from "react";
import React, { useEffect, useRef, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCloseOnBack } from "@/hooks/use-close-on-back";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";

export type NavItem = {
  href?: string;
  name: string;
  icon?: ReactNode;
  children?: NavItem[];
};

type AdaptiveNavProps = {
  navItems: NavItem[];
  pageItems?: NavItem[];
  title?: string;
  enableBlock?: boolean;
};

export function NavigationBar({
  navItems,
  pageItems,
  title = "Logo",
  enableBlock = true,
}: AdaptiveNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const buttonOpenerRef = useRef<HTMLButtonElement | null>(null);
  const isVisible = useScrollDirection();
  const pathname = usePathname();
  const router = useRouter();

  // ref to signal intentional navigation so the hook won't call history.back()
  const navInProgressRef = useRef<boolean>(false);

  useCloseOnBack(isMobileMenuOpen, () => setIsMobileMenuOpen(false), {
    restoreFocusRef: buttonOpenerRef,
    skipHistoryOnCloseRef: navInProgressRef,
  });

  // Ensure theme is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbs: Array<{
      name: string;
      href?: string;
      icon?: ReactNode;
    }> = [{ name: "Home", href: "/", icon: <Home className="h-3 w-3" /> }];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      // Capitalize and format segment name
      const name =
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

      breadcrumbs.push({
        name,
        href: isLast ? undefined : currentPath,
        icon: undefined,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // navigation handler used by mobile sidebar:
  // mark navInProgressRef true so hook will skip history.back() while we intentionally close,
  // close sheet first, then push the route after a short delay to allow cleanup/animation to finish.
  const handleMobileNavigate = (href?: string) => {
    if (!href) {
      setIsMobileMenuOpen(false);
      return;
    }

    // signal intentional navigation (so hook doesn't call history.back())
    navInProgressRef.current = true;

    // close sheet
    setIsMobileMenuOpen(false);

    // small delay to allow hook cleanup and close animation to run
    // adjust timing to match your sheet close animation (150-250ms)
    setTimeout(() => {
      // unify promise/void behavior: Promise.resolve handles both cases without TS errors
      Promise.resolve(router.push(href))
        .then(() => {
          navInProgressRef.current = false;
        })
        .catch(() => {
          navInProgressRef.current = false;
        });
    }, 180);
  };

  return (
    <>
      {/* Search Command Dialog */}
      <Dialog onOpenChange={setIsSearchOpen} open={isSearchOpen}>
        <DialogContent className="overflow-hidden p-0 shadow-lg">
          <VisuallyHidden>
            <DialogTitle>Search Commands</DialogTitle>
          </VisuallyHidden>
          <Command className="border-none outline-none ring-0 focus:outline-none focus:ring-0">
            <CommandInput
              className="border-none outline-none ring-0 focus:outline-none focus:ring-0"
              placeholder="Type a command or search..."
            />
            <CommandList className="max-h-[400px]">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandSeparator />
              <CommandGroup heading="Navigation">
                {navItems.map((item, index) => (
                  <CommandItem
                    className="cursor-pointer opacity-70 transition-all duration-200 hover:opacity-100"
                    key={index}
                    onSelect={() => {
                      if (item.href) {
                        router.push(item.href);
                      }
                      setIsSearchOpen(false);
                    }}
                  >
                    {item.icon ? (
                      <span className="mr-2">{item.icon}</span>
                    ) : null}
                    <span>{item.name}</span>
                    {item.href ? <CommandShortcut>Go</CommandShortcut> : null}
                  </CommandItem>
                ))}
              </CommandGroup>
              {pageItems ? (
                <>
                  <CommandSeparator />
                  <CommandGroup heading="Pages">
                    {pageItems.map((item, index) => (
                      <CommandItem
                        className="cursor-pointer opacity-70 transition-all duration-200 hover:opacity-100"
                        key={index}
                        onSelect={() => {
                          if (item.href) {
                            router.push(item.href);
                          }
                          setIsSearchOpen(false);
                        }}
                      >
                        {item.icon ? (
                          <span className="mr-2">{item.icon}</span>
                        ) : null}
                        <span>{item.name}</span>
                        {item.href ? (
                          <CommandShortcut>Go</CommandShortcut>
                        ) : null}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </>
              ) : null}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>

      {/* Desktop Navigation */}
      <header
        className={`fixed top-0 right-0 left-0 z-50 w-screen border-b bg-background/95 backdrop-blur transition-transform duration-300 ease-in-out supports-backdrop-filter:bg-background/60 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } hidden lg:block`}
      >
        <div className="container mx-auto px-3">
          <div className="flex h-14 items-center justify-between">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-6">
              <Link
                className="cursor-pointer font-bold text-xl opacity-90 transition-all duration-200 hover:opacity-100"
                href="/"
              >
                {title}
              </Link>
              <NavigationMenu className="relative">
                <NavigationMenuList>
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      {item.children ? (
                        <>
                          <NavigationMenuTrigger className="flex h-10 cursor-pointer items-center gap-2 px-3 py-2 opacity-80 transition-all duration-200 hover:opacity-100">
                            <span className="transition-transform duration-200">
                              {item.icon}
                            </span>
                            {item.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="min-w-[400px] p-0">
                            <div className="grid w-[400px] gap-2 p-4">
                              <div className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <Link
                                    className="flex h-full w-full cursor-pointer select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline opacity-90 outline-none transition-all duration-300 hover:opacity-100 focus:shadow-md"
                                    href={item.href ?? "#"}
                                  >
                                    <div className="mt-4 mb-2 font-medium text-lg">
                                      {item.name}
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-tight">
                                      Explore all {item.name.toLowerCase()}{" "}
                                      options
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </div>
                              <div className="mt-4 grid gap-1">
                                {item.children.map((child, childIndex) => (
                                  <ListItem
                                    href={child.href ?? "#"}
                                    icon={child.icon}
                                    key={childIndex}
                                    title={child.name}
                                  >
                                    {child.name} description
                                  </ListItem>
                                ))}
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            className="group inline-flex h-10 w-max cursor-pointer items-center justify-center rounded-md bg-background px-3 py-2 font-medium text-sm opacity-80 transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:opacity-100 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            href={item.href ?? "#"}
                          >
                            <span className="flex items-center gap-2 transition-transform duration-200">
                              <span className="transition-transform duration-200 group-hover:scale-110">
                                {item.icon}
                              </span>
                              {item.name}
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
                <NavigationMenuViewport className="data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in md:w-(--radix-navigation-menu-viewport-width)" />
              </NavigationMenu>
            </div>

            {/* Right side - Quick Actions */}
            <div className="flex items-center space-x-1">
              {/* Search Button */}
              <Button
                aria-label="Search"
                className="relative cursor-pointer opacity-70 transition-all duration-200 hover:opacity-100"
                onClick={() => setIsSearchOpen(true)}
                size="icon"
                variant="ghost"
              >
                <Search className="h-4 w-4 transition-transform duration-200" />
                <span className="sr-only">Search</span>
              </Button>

              {/* Theme Toggle */}
              <Button
                aria-label="Toggle theme"
                className="cursor-pointer opacity-70 transition-all duration-200 hover:opacity-100"
                onClick={toggleTheme}
                size="icon"
                variant="ghost"
              >
                {mounted ? (
                  theme === "dark" ? (
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                  ) : (
                    <Moon className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                  )
                ) : (
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs - Desktop */}
      {pathname !== "/" && (
        <div
          className={`fixed w-screen bg-background/80 supports-backdrop-filter:bg-background/60 ${isVisible ? "top-14" : "top-10"} right-0 left-0 z-40 border-b backdrop-blur transition-transform duration-300 ease-in-out ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          } hidden lg:block`}
        >
          <div className="container mx-auto px-3">
            <div className="flex h-10 items-center">
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                      <BreadcrumbItem>
                        {crumb.href ? (
                          <BreadcrumbLink asChild>
                            <Link
                              className="flex cursor-pointer items-center gap-1 opacity-70 transition-all delay-400 duration-200 hover:opacity-100"
                              href={crumb.href}
                            >
                              <span className="transition-transform duration-200">
                                {crumb.icon}
                              </span>
                              {crumb.name}
                            </Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage className="flex items-center gap-1 opacity-100">
                            {crumb.icon}
                            {crumb.name}
                          </BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator />
                      )}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <header
        className={`fixed top-0 right-0 left-0 z-50 border-b bg-background/95 backdrop-blur transition-transform duration-300 ease-in-out supports-backdrop-filter:bg-background/60 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } lg:hidden`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link
            className="cursor-pointer font-bold text-xl opacity-90 transition-all duration-200 hover:opacity-100"
            href="/"
          >
            {title}
          </Link>

          {/* Mobile Quick Actions */}
          <div className="flex items-center space-x-2">
            <Button
              aria-label="Search"
              className="cursor-pointer opacity-70 transition-all duration-200 hover:opacity-100"
              onClick={() => setIsSearchOpen(true)}
              size="icon"
              variant="ghost"
            >
              <Search className="h-4 w-4 transition-transform duration-200" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Mobile Theme Toggle */}
            <Button
              aria-label="Toggle theme"
              className="cursor-pointer opacity-70 transition-all duration-200 hover:opacity-100"
              onClick={toggleTheme}
              size="icon"
              variant="ghost"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                ) : (
                  <Moon className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                )
              ) : (
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Sheet onOpenChange={setIsMobileMenuOpen} open={isMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  aria-label="Toggle navigation menu"
                  className="cursor-pointer opacity-70 transition-all duration-200 hover:opacity-100"
                  ref={buttonOpenerRef}
                  size="icon"
                  variant="ghost"
                >
                  <Menu className="h-6 w-6 transition-transform duration-200" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                className="w-80 max-w-[75vw] p-0 max-xs:w-full max-xs:max-w-full"
                side="right"
              >
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
                <MobileSidebar
                  navItems={navItems}
                  onNavigate={handleMobileNavigate}
                  title={title}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Breadcrumbs */}
        {pathname !== "/" && (
          <div className="border-t bg-background/50 px-4 py-2">
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.length > 3 ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link
                          className="flex cursor-pointer items-center gap-1 opacity-70 transition-all duration-200 hover:opacity-100"
                          href="/"
                        >
                          <Home className="h-3 w-3 transition-transform duration-200" />
                          Home
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbEllipsis />
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="flex items-center gap-1 opacity-100">
                        {breadcrumbs.at(-1)?.name}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : (
                  breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                      <BreadcrumbItem>
                        {crumb.href ? (
                          <BreadcrumbLink asChild>
                            <Link
                              className="flex cursor-pointer items-center gap-1 opacity-70 transition-all duration-200 hover:opacity-100"
                              href={crumb.href}
                            >
                              <span className="transition-transform duration-200">
                                {crumb.icon}
                              </span>
                              {crumb.name}
                            </Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage className="flex items-center gap-1 opacity-100">
                            {crumb.icon}
                            {crumb.name}
                          </BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator />
                      )}
                    </React.Fragment>
                  ))
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      {enableBlock ? (
        <div className={`${pathname !== "/" ? "h-24 lg:h-24" : "h-14"}`} />
      ) : null}
    </>
  );
}

const ListItem = ({
  className,
  title,
  children,
  icon,
  ref,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { title: string; icon?: ReactNode } & {
  ref?: React.RefObject<React.ElementRef<"a"> | null>;
}) => (
  <NavigationMenuLink asChild>
    <a
      className={cn(
        "block cursor-pointer select-none space-y-1 rounded-md p-2 leading-none no-underline opacity-80 outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:opacity-100 focus:bg-accent focus:text-accent-foreground",
        className
      )}
      ref={ref}
      {...props}
    >
      <div className="flex items-center gap-2">
        <span className="transition-transform duration-200">{icon}</span>
        <div className="font-medium text-sm leading-none">{title}</div>
      </div>
      <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
        {children}
      </p>
    </a>
  </NavigationMenuLink>
);
ListItem.displayName = "ListItem";

function MobileSidebar({
  navItems,
  onNavigate,
  title,
}: {
  navItems: NavItem[];
  onNavigate: (href?: string) => void;
  title: string;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex h-full w-full flex-col bg-sidebar">
      {/* Sidebar Header */}
      <div className="flex flex-col gap-3 border-sidebar-border border-b p-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-sm bg-primary p-1 text-primary-foreground transition-all duration-200">
            {/* <User className="h-4 w-4" /> */}
            <GalleryVerticalEnd className="h-4 w-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate px-2 font-semibold">{title}</span>
          </div>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-auto p-3">
        <div className="space-y-1.5">
          <div className="px-2 py-1 font-semibold text-sidebar-foreground/70 text-xs uppercase tracking-wider">
            Navigation
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <MobileNavItem item={item} key={index} onNavigate={onNavigate} />
            ))}
          </nav>
        </div>

        <Separator className="my-4" />

        {/* Quick Actions in Sidebar */}
        <div className="space-y-1.5">
          <div className="px-2 py-1 font-semibold text-sidebar-foreground/70 text-xs uppercase tracking-wider">
            Quick Actions
          </div>
          <div className="flex flex-col gap-1">
            <Button
              aria-label="Toggle theme"
              className="h-9 cursor-pointer justify-start px-3 opacity-80 transition-all duration-200 hover:opacity-100"
              onClick={toggleTheme}
              variant="ghost"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="mr-2 h-4 w-4 transition-all duration-300" />
                ) : (
                  <Moon className="mr-2 h-4 w-4 transition-all duration-300" />
                )
              ) : null}
              Toggle Theme
            </Button>
            <Button
              aria-label="Open settings"
              className="h-9 cursor-pointer justify-start px-3 opacity-80 transition-all duration-200 hover:opacity-100"
              onClick={() => onNavigate()}
              variant="ghost"
            >
              <Settings className="mr-2 h-4 w-4 transition-transform duration-200" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="border-sidebar-border border-t p-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-label="User account menu"
              className="h-10 w-full cursor-pointer justify-start px-3 opacity-90 transition-all duration-200 hover:opacity-100"
              variant="ghost"
            >
              <div className="flex flex-1 items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs transition-all duration-200">
                  JD
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">John Doe</span>
                  <span className="truncate text-sidebar-foreground/70 text-xs">
                    Account
                  </span>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56" side="top">
            <DropdownMenuLabel className="relative pl-8">
              <div className="absolute top-0 bottom-0 left-2 w-px bg-sidebar-border" />
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="relative cursor-pointer pl-8 opacity-80 transition-all duration-200 hover:opacity-100"
              onClick={() => onNavigate("/profile")}
            >
              <div className="absolute top-0 bottom-0 left-2 w-px bg-sidebar-border" />
              <User className="mr-2 h-4 w-4 transition-transform duration-200" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="relative cursor-pointer pl-8 opacity-80 transition-all duration-200 hover:opacity-100"
              onClick={() => onNavigate("/settings")}
            >
              <div className="absolute top-0 bottom-0 left-2 w-px bg-sidebar-border" />
              <Settings className="mr-2 h-4 w-4 transition-transform duration-200" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="relative cursor-pointer pl-8 opacity-80 transition-all duration-200 hover:opacity-100"
              onClick={() => onNavigate("/logout")}
            >
              <div className="absolute top-0 bottom-0 left-2 w-px bg-sidebar-border" />
              <LogOut className="mr-2 h-4 w-4 transition-transform duration-200" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: (href?: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (item.children) {
    return (
      <Collapsible onOpenChange={setIsOpen} open={isOpen}>
        <CollapsibleTrigger
          aria-expanded={isOpen}
          aria-label={`${item.name} menu, ${isOpen ? "expanded" : "collapsed"}`}
          className="flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-1.5 font-medium text-sm opacity-80 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:opacity-100 focus:bg-sidebar-accent focus:text-sidebar-accent-foreground focus:outline-none focus:ring-0"
        >
          <span className="flex items-center gap-2">
            <span className="transition-transform duration-200">
              {item.icon}
            </span>
            {item.name}
          </span>
          <ChevronRight
            aria-hidden="true"
            className={`h-4 w-4 transition-all duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-0.5">
          {item.children.map((child, childIndex) => (
            <button
              className="relative flex w-full items-center gap-2 rounded-md px-2 py-1.5 pl-6 text-left text-sm opacity-70 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:opacity-100 focus:bg-sidebar-accent focus:text-sidebar-accent-foreground focus:outline-none focus:ring-0"
              key={childIndex}
              onClick={() => onNavigate(child.href)}
              type="button"
            >
              <div className="absolute top-0 bottom-0 left-4 w-px bg-sidebar-border" />
              <span className="transition-transform duration-200">
                {child.icon}
              </span>
              {child.name}
            </button>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <button
      className="flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-left font-medium text-sm opacity-80 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:opacity-100 focus:bg-sidebar-accent focus:text-sidebar-accent-foreground focus:outline-none focus:ring-0"
      onClick={() => onNavigate(item.href)}
      type="button"
    >
      <span className="transition-transform duration-200">{item.icon}</span>
      {item.name}
    </button>
  );
}
