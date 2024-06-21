import { Checkbox } from '@/components/ui/checkbox';

interface HobbyCheckboxProps {
  id: string;
  label: string;
  onChange: (id: string) => void;
}

export function HobbyCheckbox({ id, label, onChange }: HobbyCheckboxProps) {
  return (
    <button
      className="flex items-center space-x-2 border border-spacing-2 rounded-full p-3 bg-white border-green-700 hover:bg-green-100"
      onClick={() => onChange(id)}
    >
      <Checkbox id={id} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none cursor-pointer text-black"
      >
        {label}
      </label>
    </button>
  );
}
