/** create format number component use react-intl
 */
// Path: src/components/FormatNumber/FormatNumber.tsx
import React from "react";

export interface FormatNumberProps {
  value: number;
  currency?: string;
  locale?: string;
}

export const FormatNumber: React.FC<FormatNumberProps> = ({
  value,
  currency = "VND",
  locale = "vi-VN",
}) => {
  const formatter = Intl.NumberFormat("vi-VN", {
    currency,
    style: "currency",
    currencyDisplay: "symbol",
  });
  return <>{formatter.format(value)}</>;
};
