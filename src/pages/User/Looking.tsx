import Section from "../../components/Section"
import Card from "../../components/Card";
const Looking = () =>{
    return(
        <>
        <Section className="section-extend2" >
        <div className="pt-12" >
                <h1 className="text-center text-4xl color- font-bold" >What are your looking for ?</h1>
                <div className="cards">
                    <Card img="./card1.png" className="text-center cursor-pointer" name="Hostel" size="Lorem ipsum dolor sit amet consectetur"  />
                    <Card img="./card2.png" className="text-center cursor-pointer" name="Rent" size="adipisicing elit. Quo sint explicabo ipsum perspiciatis"  />
                    <Card img="./card3.png" className="text-center cursor-pointer" name="Land" size="quaerat blanditiis, facere provident quisquam magnam ab quibusdam"  />
                </div>
            </div>
        </Section>
        </>
    )
}

export default Looking;