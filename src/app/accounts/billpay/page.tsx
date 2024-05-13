import TabComponentBillPay from "@/components/accounts/billpay/TabComponentBillPay";
import React from "react";

export default function BillPayPage() {
  return (
    <div className="">
      <div className="w-full min-h-28 p-4 bg-[#d71e28]">
        <span className="text-white text-xl font-semibold mb-2">BillPay</span>
      </div>
      <TabComponentBillPay />
    </div>
  );
}
