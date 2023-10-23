import React from "react";
import { MembershipPlanProps } from "./membership-plan.props";
import moment from "moment";

const MembershipPlan = ({ subscription }: MembershipPlanProps) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-1 md:border-t md:border-b-0  md:pb-0">
      <div className="space-y-4 py-4">
        <h4 className="text-lg text-[gray]">Membership & Billing</h4>
        <button className="bg-gray-300 hover:bg-gray-200 tansition-all font-medium text-black py-2 whitespace-nowrap h-10 w-3/5 md:w-4/5 shadow-md text-sm ">
          Cancel Membership
        </button>
      </div>

      <div className="col-span-3">
        <div className="flex flex-col justify-between border-b border-white/10 py-4 md:flex-row">
          <div className="">
            <p className="font-semibold">
              Email:{" "}
              {subscription.default_payment_method.billing_details?.email}
            </p>
            <p className="text-[gray]">Password: {subscription.default_payment_method.billing_details?.name}</p>
          </div>

          <div className="text-right">
            <p className={"membershipLink"}>Change email</p>
            <p className={"membershipLink"}>Change password</p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-4 pb-4 md:flex-row md:pb-0">
          <div className="">
            <p>
              Your membership plan will end on{" "}
              {moment(subscription.current_period_end * 1000).format(
                "DD MMM yyyy"
              )}
            </p>
          </div>
          <div className="md:text-right">
            <p className="membershipLink">Manage payment info</p>
            <p className="membershipLink">Add backup payment method</p>
            <p className="membershipLink">Billing details </p>
            <p className="membershipLink">Change billing day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlan;
