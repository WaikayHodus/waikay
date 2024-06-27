import Table from './Table'

const SeachResult = () => {
    const handleSubmit = (e) => {
        e.preventDefault();


        axios.post('http://localhost:8000/Record', {
            id: id,
            date: date,
            type: type,
            height: parseInt(height),
            width: parseInt(width),
            quantity:parseInt(quantity),
            rate: parseInt(rate),
            amount: parseInt(amount)
        })
        .then(res => {
            window.location.reload();    
        })
        .catch(err => console.log(err));
       
    }



    return ( 
        <div>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>HEIGHT</th>
                        <th>WIDTH</th>
                        <th>QUANTITY</th>
                        <th>RATE</th>
                        <th>AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, id) => (
                            <tr key={parseInt(id)}>
                                <td>{user.date}</td>
                                <td>{user.type}</td>
                                <td>{user.height}</td>
                                <td>{user.width}</td>
                                <td>{user.quantity}</td>
                                <td>{user.rate}</td>
                                <td>{user.amount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    

     );
     
}
 
export default SeachResult;