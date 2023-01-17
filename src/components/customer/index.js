
import './Customer.scss';

export function Customer(props) {
  return (
    <div className="customer-wrapper">
      <div className='customer-info'>
        <p>{props.reccord.name}</p>
        <p>Customer: {props.reccord.customer}</p>
        <p>Date: {props.reccord.date}</p>
      </div>
    </div>
  );
}

