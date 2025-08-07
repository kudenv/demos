import { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/features/hooks';
import { selectCart, removeFromCart, updateQuantity } from '@/features/reducers/cartReducer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { formatCurrency } from '../lib/formatCurrency';
import { useNavigate } from 'react-router';

export default function CartPage() {
  const cart = useAppSelector(selectCart); // items: { id, name, price, type, qty }
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const subtotal = useMemo(() => cart.reduce((acc: number, it: any) => acc + it.price * (it.qty ?? 1), 0), [cart]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-sm text-muted-foreground">Your cart is empty.</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items list */}
          <div className="lg:col-span-2 space-y-3">
            {cart.map((item: any) => (
              <Card key={item.id} className="p-3 flex items-center gap-4">
                <div className="size-16 rounded bg-gray-100 flex items-center justify-center text-xs font-medium">
                  {item.name?.[0] ?? 'P'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="truncate">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.type}</p>
                    </div>
                    <div className="text-sm font-semibold">{formatCurrency(item.price)}</div>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <label htmlFor={`qty-${item.id}`} className="text-xs">Qty</label>
                      <Input
                        id={`qty-${item.id}`}
                        type="number"
                        min={1}
                        value={item.qty ?? 1}
                        onChange={(e) => {
                          const val = Math.max(1, Number(e.target.value));
                          dispatch(updateQuantity({ id: item.id, qty: val }));
                        }}
                        className="w-20 h-8"
                      />
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => dispatch(removeFromCart(item.id))}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Summary */}
          <Card className="p-4 h-fit sticky top-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="text-base font-semibold">{formatCurrency(subtotal)}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Shipping & taxes calculated at checkout.</p>
            <Button className="mt-4 w-full" onClick={() => navigate('/checkout')}>Checkout</Button>
          </Card>
        </div>
      )}
    </section>
  );
}