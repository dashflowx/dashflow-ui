import { Button, Typography } from '@dashflowx/core';

export type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta?: string;
  highlighted?: boolean;
};

export type PricingVariant = 'default' | 'bordered' | 'muted' | 'soft' | 'flush';
export type PricingSize = 'sm' | 'md' | 'lg';
export type PricingColumns = 1 | 2 | 3;
export type PricingAlign = 'left' | 'center';

export type PricingTableProps = {
  plans: PricingPlan[];
  onSelect?: (name: string) => void;
  variant?: PricingVariant;
  size?: PricingSize;
  columns?: PricingColumns;
  align?: PricingAlign;
  className?: string;
};

const VARIANT_CARD: Record<PricingVariant, string> = {
  default: 'border border-slate-200 bg-white',
  bordered: 'border-2 border-slate-300 bg-white shadow-sm',
  muted: 'border border-slate-200 bg-slate-50',
  soft: 'border border-transparent bg-slate-100',
  flush: 'border border-transparent bg-transparent',
};

const VARIANT_HIGHLIGHT: Record<PricingVariant, string> = {
  default: 'border border-slate-900 bg-white shadow-md',
  bordered: 'border-2 border-slate-900 bg-white shadow-md',
  muted: 'border border-slate-900 bg-slate-50 shadow-md',
  soft: 'border border-slate-900 bg-slate-100 shadow-md',
  flush: 'border border-slate-900 bg-transparent shadow-sm',
};

const SIZE_CARD: Record<PricingSize, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const SIZE_PRICE: Record<PricingSize, string> = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
};

const SIZE_FEATURE: Record<PricingSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const COLUMNS: Record<PricingColumns, string> = {
  1: 'grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
};

const ALIGN: Record<PricingAlign, string> = {
  left: 'text-left',
  center: 'text-center',
};

export function PricingTable({
  plans,
  onSelect,
  variant = 'default',
  size = 'md',
  columns = 3,
  align = 'left',
  className = '',
}: PricingTableProps) {
  return (
    <div
      className={`grid gap-4 ${COLUMNS[columns]} ${className}`.trim()}
      data-testid="pricing-table"
    >
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-lg ${SIZE_CARD[size]} ${ALIGN[align]} ${
            plan.highlighted ? VARIANT_HIGHLIGHT[variant] : VARIANT_CARD[variant]
          }`}
        >
          <Typography variant="three" size={size === 'sm' ? 'base' : size === 'lg' ? 'xl' : 'lg'} weight="semibold">
            {plan.name}
          </Typography>
          <p className={`mt-2 font-bold ${SIZE_PRICE[size]}`}>
            {plan.price}
            {plan.period ? (
              <span className="text-sm font-normal text-slate-500">/{plan.period}</span>
            ) : null}
          </p>
          <ul className={`mt-4 space-y-2 text-slate-600 ${SIZE_FEATURE[size]}`}>
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className={`mt-6 ${align === 'center' ? 'flex justify-center' : ''}`}>
            <Button
              variant={plan.highlighted ? 'primary' : 'outline'}
              onClick={() => onSelect?.(plan.name)}
            >
              {plan.cta ?? 'Choose'}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
