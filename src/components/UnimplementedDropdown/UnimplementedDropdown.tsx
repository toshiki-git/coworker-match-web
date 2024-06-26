import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface UnimplementedDropdownProps {
  children: React.ReactNode;
  text: string;
}

export function UnimplementedDropdown({
  children,
  text,
}: UnimplementedDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{text}</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
