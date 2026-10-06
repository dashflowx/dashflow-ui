import { Button, Typography } from '@dashflowx/core';

export type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta?: string;
  highlighted?: boolean;
};

export type PricingTableProps = {
  plans: PricingPlan[];
  onSelect?: (name: string) => void;
};

export function PricingTable({ plans, onSelect }: PricingTableProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3" data-testid="pricing-table">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-lg border p-6 ${plan.highlighted ? 'border-slate-900 shadow-md' : 'border-slate-200'}`}
        >
          <Typography variant="three" size="lg" weight="semibold">
            {plan.name}
          </Typography>
          <p className="mt-2 text-2xl font-bold">
            {plan.price}
            {plan.period ? <span className="text-sm font-normal text-slate-500">/{plan.period}</span> : null}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="mt-6">
            <Button variant={plan.highlighted ? 'primary' : 'outline'} onClick={() => onSelect?.(plan.name)}>
              {plan.cta ?? 'Choose'}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
