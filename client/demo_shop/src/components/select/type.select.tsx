import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SelectTypeProps {
  options?: SelectOptions[];
  changeValueHandler(value: string): void;
}

interface SelectOptions {
  label: string;
  value: string;
}

const TypeSelect = ({ options, changeValueHandler }: SelectTypeProps) => {
  return (
    <div className="w-full">
      <Select onValueChange={changeValueHandler}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option, index) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TypeSelect;
