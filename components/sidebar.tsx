'use client';

import { Button } from '@/components/ui/button';
import { navigationConfig } from '@/config/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed border lg:w-[16vw] w-[23vw] h-full right-0 z-50 bg-background/80 backdrop-blur-sm p-4 hidden md:block">
      <div className="py-4 space-y-2">
        {navigationConfig.map((item) => (
          <Button
            key={item.href}
            variant={item.variant}
            asChild
            className={cn(
              'w-full justify-start gap-2',
              pathname === item.href && 'bg-accent'
            )}
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
