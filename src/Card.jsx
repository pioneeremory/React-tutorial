import loganPic from './assets/logan.jpg'


function Card(props){
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)
    return(
        <div className="card">
            <img className="card-img-top" src={loganPic} alt="Bro Code"></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make YouTube videos and play video games</p>
        </div>
    )
}

export default Card