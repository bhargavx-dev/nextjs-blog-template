import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { SetStateAction } from "react";

export function PagesDropdown({
  setMenuOpen,
}: {
  setMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p className="cursor-pointer text-sm font-medium text-gray-700 ]">
          Pages
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-20 font-medium text-gray-700 font-[family-name:var(--font-geist-sans)]"
        align="start"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link
              onClick={() => setMenuOpen(false)}
              href="/blog/must-have-superfoods"
            >
              Single Blog
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link onClick={() => setMenuOpen(false)} href="/changelog">
              Changelog
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link onClick={() => setMenuOpen(false)} href="/404">
              404
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
