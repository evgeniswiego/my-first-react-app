import './ExpenseDate.css';

function ExpenseDate(props){
    const month = props.date.toLocaleString('he-IL',{month: 'long'});
    const day = props.date.toLocaleString('he-IL',{day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <section className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{day}</div>
            <div className='expense-date__day'>{year}</div>
        </section>
    )
}

export default ExpenseDate;