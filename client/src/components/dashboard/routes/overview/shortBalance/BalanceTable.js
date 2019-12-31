import React from 'react';

export default ({caption, incomes, spendings}) => {
	return (
		<table className="table today table-bordered table-info">
		  <caption>{caption}</caption>
		  <tbody>
		    <tr>
		      <td colspan='2' scope="row">
		      	Incomes: <strong className='text-success'>{incomes}$</strong>
		      </td>
		    </tr>
		    <tr>
		      <td scope="row">
		      	Spendings: <strong className='text-danger'>{spendings}$</strong>
		      </td>
		      <td>Total: 
		      	<strong className={(incomes - spendings) > 0 ? 'text-success' : 'text-danger' }>
		      		{incomes - spendings}$
		      	</strong></td>
		    </tr>
		  </tbody>
		</table>
	);
}