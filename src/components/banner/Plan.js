import React from 'react';
import { DescriptionPlan } from './DescriptionPlan';
import { PricePerDay } from './PricePerDay';

export const Plan = ({checkedPosition, plan, toggleColor}) => {
    return (
      <label className={`container ${checkedPosition === plan.id ? 'active' : ''}`} key={plan.id}>
        <DescriptionPlan plan={plan} />
        <input type="radio" defaultChecked={false} onChange={() => toggleColor(plan.id)} name="radio"/>
        <span className="checkmark"></span>
        <PricePerDay plan={plan} checkedPosition={checkedPosition} />
    </label>
    )
}
