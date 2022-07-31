import React, { useState } from 'react';
import { Plan } from './Plan';
import { plans } from './config';
import { Button } from './Button';

export const Plans = () => {
	const [checkedPosition, setCheckedPosition] = useState();
	const toggleColor = (activeId) => {
		setCheckedPosition(activeId);
	}
	const getPlan = () => {
		let activePlan = plans.find(item => item.id === checkedPosition);
		alert (activePlan ? `${activePlan.name} ${activePlan.cost} ${activePlan.paymentFrequency}` : 'Choose plan')
	}

	return (
			<>
				{plans.map((item)=> (
					<Plan key = {item.id} checkedPosition={checkedPosition} plan={item} toggleColor={toggleColor} />
				))}
				<Button text='Get my plan' onClick={getPlan}/>
			</>
	)
};
