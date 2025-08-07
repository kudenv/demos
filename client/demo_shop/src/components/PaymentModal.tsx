import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function PaymentModal({
  open,
  onOpenChange,
  onPaid,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onPaid: () => void;
}) {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const sanitizedNumber = cardNumber.replace(/\s|-/g, '');
  const canSubmit =
    cardName.trim().length > 2 &&
    /^\d{12,19}$/.test(sanitizedNumber) &&
    /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry) &&
    /^\d{3,4}$/.test(cvc);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Payment</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            placeholder="Cardholder Name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <Input
            placeholder="Card Number"
            inputMode="numeric"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className="flex gap-3">
            <Input
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
            <Input
              placeholder="CVC"
              inputMode="numeric"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            disabled={!canSubmit}
            onClick={() => {
              onOpenChange(false);
              onPaid();
            }}
          >
            Pay
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}