import Card from "../../components/Card";



const Home1 = () => {
    return (
        <>
            <div className="pt-12" >
                <h1 className="text-center text-4xl color- font-bold" >Find your perfect home</h1>
                <div className="cards">
                    <Card img="./card1.png" name="Modern Apartment" price="Rs.50,000/month" size="3 bd / 2 ba / 1100 Sq Ft" />
                    <Card img="./card2.png" name="Modern Apartment" price="Rs.50,000/month" size="3 bd / 2 ba / 1100 Sq Ft" />
                    <Card img="./card3.png" name="Modern Apartment" price="Rs.50,000/month" size="3 bd / 2 ba / 1100 Sq Ft" />
                </div>
            </div>
        </>
    )
}

export default Home1;