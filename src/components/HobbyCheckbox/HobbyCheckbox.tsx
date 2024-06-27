import { useState, useEffect } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface HobbyCheckboxProps {
  id: string;
  label: string;
  onChange: (id: string, checked: boolean) => void;
  initialChecked?: boolean;
}

export function HobbyCheckbox({
  id,
  label,
  onChange,
  initialChecked = false,
}: HobbyCheckboxProps) {
  const [checked, setChecked] = useState(initialChecked);

  useEffect(() => {
    setChecked(initialChecked);
  }, [initialChecked]);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(id, newChecked);
  };

  return (
    <div
      className="flex items-center cursor-pointer space-x-2 border border-spacing-2 rounded-full p-3 bg-white border-green-700 hover:bg-green-100"
      onClick={handleChange}
    >
      <Checkbox id={id} checked={checked} />
      <p className="text-sm font-medium cursor-pointer leading-none text-black">
        {label}
      </p>
    </div>
  );
}
