import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector } from '@/features/hooks';
import { selectCart } from '@/features/reducers/cartReducer';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PaymentModal } from '@/components/PaymentModal';

const formatCurrency = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

export default function CheckoutPage() {
  const cart = useAppSelector(selectCart);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const subtotal = useMemo(
    () => cart.reduce((acc: any, it: any) => acc + (it.qty ?? 1) * it.price, 0),
    [cart]
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Delivery form */}
        <Card className="p-4 lg:col-span-2 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input placeholder="Full Name" required />
            <Input type="email" placeholder="Email" required />
            <Input placeholder="Phone" required />
            <Input placeholder="Country" required />
            <Input placeholder="City" required />
            <Input placeholder="Street" required />
            <Input placeholder="Zip Code" required />
          </div>
          <Button className="mt-2 w-full sm:w-auto" onClick={() => setOpen(true)}>
            Proceed to Payment
          </Button>
        </Card>

        {/* Order summary */}
        <Card className="p-4 h-fit">
          <h2 className="text-base font-semibold mb-3">Order Summary</h2>
          <div className="space-y-2 text-sm">
            {cart.map((it: any) => (
              <div key={it.id} className="flex justify-between">
                <span className="truncate">
                  {it.name} × {it.qty ?? 1}
                </span>
                <span>{formatCurrency((it.qty ?? 1) * it.price)}</span>
              </div>
            ))}
            <div className="flex justify-between pt-2 border-t mt-2">
              <span className="font-medium">Subtotal</span>
              <span className="font-semibold">{formatCurrency(subtotal)}</span>
            </div>
          </div>
        </Card>
      </div>

      <PaymentModal
        open={open}
        onOpenChange={setOpen}
        onPaid={() => navigate('/confirmation')}
      />
    </section>
  );
}