import Table from 'react-bootstrap/Table';
import './Table.scss';


export function ProductTable(props) {

  const getBagroundColour =(level, price)=>{
    const normalizedPrice = parseInt(price.replace('$',''));
    if(level>normalizedPrice){
      return 'yellow';
    }
    return 'none';
  }
  return (
    <div className="product-wrapper">
      <Table responsive="sm">
      <thead>
      <tr className="table-head">
        <th>Item</th>
        <th></th>
        <th>Qantity</th>
        <th>Unit price</th>
      </tr>
      </thead>
      <tbody>
      {props.product.map((el,id)=>{
        return <tr key={id} style={{backgroundColor:`${getBagroundColour(100,el.price)}`}}>
          <td className="table-product-descript">
            <p className="table-name">{el.name}</p>
            <p className="table-description">{el.description}</p>
          </td>
          <td><div className="table-img" style={{backgroundImage: `url(${el.image})`}}></div></td>
          <td>{el.quantity}</td>
          <td>{el.price}</td>
        </tr>
      })}

      </tbody>
    </Table>
    </div>
  );
}

