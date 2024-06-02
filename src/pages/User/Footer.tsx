import Section from "../../components/Section";
import "../../App.css"
const Footer: React.FC = () => {
    return (
        <>
            <Section className="bg-white " >
                <div className="pt-12 flex flex-col h-screen justify-center items-center gap-3 " >
                    <h1 className="text-center  text-4xl color- font-semibold color-- number " >+977 123456789</h1>
                    <h1 className="text-center  text-4xl color- font-bold" >Let's Find You Together The Place You Deserve</h1>
                    <p className="text-center font-thin" >Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                        nec sagittis sem nibh id elit. </p>
                        <button className="btn-pri w-28 rounded" >Call Now.</button>
                        <p className="text-gray-400 font-light mt-56" >Copyright © 2024 Real Estate</p>
                </div>
            </Section>
        </>
    )
}

export default Footer;