import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';

export default function ConfirmationPage() {
  const navigate = useNavigate();
  return (
    <section className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold">Order Confirmed</h1>
      <p className="text-sm text-muted-foreground mt-2">
        Order sent to the shop. Within 2 days, it will be delivered to your address.
      </p>
      <Button className="mt-6" onClick={() => navigate('/catalog')}>
        Back to Catalog
      </Button>
    </section>
  );
}