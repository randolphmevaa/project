"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard } from "lucide-react";
import { featuredEvents } from "@/lib/data";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutPageProps {
  params: {
    id: string;
  };
  searchParams: {
    quantity: string;
  };
}

interface CheckoutFormProps {
  amount: number;
  eventId: string;
}

function CheckoutForm({ amount, eventId }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/tickets/${eventId}/confirmation`,
      },
    });

    if (submitError) {
      setError(submitError.message || "An error occurred");
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}
      <Button
        type="submit"
        className="w-full"
        disabled={!stripe || processing}
      >
        <CreditCard className="mr-2 h-4 w-4" />
        {processing ? "Processing..." : `Pay €${amount.toFixed(2)}`}
      </Button>
    </form>
  );
}

export default function CheckoutPage({ params, searchParams }: CheckoutPageProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const router = useRouter();
  
  const event = featuredEvents.find((event) => event.id === params.id);
  const quantity = parseInt(searchParams.quantity) || 0;
  
  if (!event || quantity === 0) {
    router.push(`/tickets/${params.id}`);
    return null;
  }

  const basePrice = 58.00;
  const presaleFee = 6.00;
  const totalPrice = (basePrice + presaleFee) * quantity;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: totalPrice,
        eventId: params.id,
        quantity: quantity,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [params.id, quantity, totalPrice]);

  const options: Parameters<typeof Elements>[0]['options'] = {
    clientSecret: clientSecret || undefined,
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <div className="min-h-screen bg-[#FAF6EB] pt-24 pb-16 text-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="pl-0 mb-4">
            <Link href={`/tickets/${params.id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Ticket Selection
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{event.title}</p>
                <p className="text-sm text-muted-foreground">{quantity} x General Admission</p>
              </div>
              <p className="font-semibold">€{totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Stripe Payment Form */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Payment Details</h2>
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm amount={totalPrice} eventId={params.id} />
            </Elements>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 Rockhal. La version actuelle de nos conditions générales de vente est disponible sur notre site rockhal.lu. Un lien direct se trouve ici. Privacy</p>
        </div>
      </div>
    </div>
  );
}