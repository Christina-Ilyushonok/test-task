import { ReactComponent as Rectangle }  from '../../images/rectangle.svg';

export const PricePerDay = ({plan, checkedPosition}) => {
	return (
		<div  className='rectangle-container'>
				<Rectangle fill = {checkedPosition === plan.id ? 'white' : "#F0E4EA"} className='rectangle'/>
				<div className='price-container'>
					<span className="price-currency">$</span>
					<span className="price-integer">{Math.trunc(plan.costPerDay)}</span>
					<span className="price-fractional">{(plan.costPerDay  + "").split(".")[1]}</span>
					<span className="price-period">per day</span>  
				</div>
		</div>
  )
}
