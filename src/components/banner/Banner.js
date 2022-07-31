import { Description } from './Description';
import { Header } from './Header';
import { Plans } from './Plans';

export const Banner =  () => {
    return (
        <div className='banner'>
            <Header text='Your 3-month weight loss plan'/>
            <Description />
            <Header text='Choose your plan' className='header-plans'/> {/*  надо выровнять */}
            <Plans />
        </div>
    );
}