import { DrowerContainer } from '@/components/drawer';
import { TypeSelect } from '@/components/select';

import { useAppDispatch } from '@/features/hooks';
import { setFilter } from '@/features/reducers/filterReducer';

import { CustomDualRangeSlider } from '@/components/sliders';

const DrawerFilter = () => {
  const paymentTypeOptions = [
    { id: 1, label: 'Men', value: 'men' },
    { id: 2, label: 'Wemen', value: 'weman' },
  ];

  const dispatch = useAppDispatch();

  const onPriceRangeValueCommit = (value: number[]) => {
    const filter = {
      priceRange: value,
    };
    dispatch(setFilter(filter));
  };

 

  const onPaymentTypeValueChange = (value: string) => {
    const filter = {
      paymentType: value,
    };
    dispatch(setFilter(filter));
  };

  return (
    <DrowerContainer
      btnOpenTitle="Filter"
      key="filter-drawer-100"
      contentTitle="Filter"
    >
      <div className="grid grid-cols-1 px-8 gap-4 justify-between">
        <div className="flex flex-col gap-2">
          <CustomDualRangeSlider
            name="Price Range"
            min={0}
            max={100}
            onValueCommit={onPriceRangeValueCommit}
          />
        </div>
       
        
        <div className="flex flex-col gap-2">
          <label htmlFor="payment-type">Payment Type</label>
          <TypeSelect
            options={paymentTypeOptions}
            changeValueHandler={onPaymentTypeValueChange}
          />
        </div>        
      </div>
    </DrowerContainer>
  );
};

export default DrawerFilter;
