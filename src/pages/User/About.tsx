import Overlay from "../../components/Overlay";
import Section from "../../components/Section";
const About:React.FC = () =>{
    return (
        <>
        <Section className="section-extend1 section-extend2" >
        <Overlay className="bg-violet-transparent"  >
                    <div className="flex items-center h-screen gap-20 justify-evenly " >
                        <div className="content">
                        <h1 className="heading" >About</h1>
                        <p className="para" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus enim illum, quia voluptatibus quis assumenda molestias numquam culpa. Veritatis molestias ipsum vero dolore eaque labore ut ipsa, sit quisquam perspiciatis, repellat nisi totam vitae obcaecati et sapiente modi. Cum ipsum laboriosam doloremque exercitationem animi quibusdam dolorum in excepturi fuga beatae dolores eveniet veritatis nemo iste assumenda ratione aspernatur earum, fugiat dignissimos corrupti iure veniam nostrum illo sapiente! Odit delectus fuga quibusdam sed ex, ad, ullam consequuntur aspernatur alias itaque nam, autem temporibus ipsam vero repellendus porro voluptate! Perferendis et soluta tenetur consectetur dicta nisi quae obcaecati alias error dolorum.</p>
                        <button className="btn-white w-40" >Read More</button>
                    </div>
                    <div className="img-section">
                        <img src="/about.jpg" />
                    </div>
                    </div>
                    
                </Overlay>
                </Section>
        </>
    )
}

export default About;