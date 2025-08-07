import { useState } from 'react';
import { DualRangeSlider } from '@/components/ui/dual-range-slider';

type CustomDualRangeProps = {
  name: string;
  onValueChange: (value: number[]) => void;
  onValueCommit: (value: number[]) => void;
  min: number | undefined;
  max: number | undefined;
};
const CustomDualRangeSlider = ({
  name,
  min,
  max,
  onValueChange,
  onValueCommit,
  ...props
}: Partial<CustomDualRangeProps>) => {
  const [values, setValues] = useState([min as number, max as number]);

  const changeValueHandler = (value: number[]) => {
    setValues(value);
    if (onValueChange) onValueChange(value);
  };

  return (
    <div className="w-full pt-5">
      <div className="flex items-center justify-center mt-1 mb-7">
        <span>{name}</span>
      </div>
      <div>
        <DualRangeSlider
          label={(value) => value}
          value={values}
          onValueChange={changeValueHandler}
          onValueCommit={onValueCommit}
          min={min}
          max={max}
          step={1}
          {...props}
        />
      </div>
    </div>
  );
};

export default CustomDualRangeSlider;
