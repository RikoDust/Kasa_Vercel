
import Banner from "../components/Banner/Banner";
import CardGallery from "../components/CardGallery/CardGallery";



const Home = () => {
    return (
        <div>
            <Banner 
                image="/assets/images/img_homeBanner.png"
                text="Chez vous, partout et ailleurs"
            />
            <CardGallery />
        </div>
    );
};






export default Home;