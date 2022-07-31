import { ReactComponent as Flag }  from '../../images/flag.svg';

export const DescriptionPlan = ({ plan }) => {
  return (
    <div  className = 'description-plan'>
      {plan.mostPopular &&
        <div className='container-flag'>
          <Flag className='flag'/>
          <span className='text'>More popular</span>
        </div>
      }
      <span>{plan.name}</span>
      <span className='cost'>{`${plan.cost} ${plan.paymentFrequency}`}</span>
    </div>
  )
}
