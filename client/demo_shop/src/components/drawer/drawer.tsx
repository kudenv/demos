import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

type DrowerPropsType = {
  children?: React.ReactNode;
  btnOpenTitle?: string;
  btnCanselTitle?: string;
  contentTitle?: string;
};
const DrowerContainer = ({
  children,
  btnOpenTitle = 'Open Drawer',
  contentTitle = '',
  btnCanselTitle = 'Close',
}: DrowerPropsType) => {
  return (
    <Drawer direction="left" handleOnly={true} autoFocus={true}>
      <DrawerTrigger asChild>
        <Button variant="outline">{btnOpenTitle}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{contentTitle}</DrawerTitle>
          </DrawerHeader>
          <div className="p-2">{children}</div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">{btnCanselTitle}</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default DrowerContainer;
