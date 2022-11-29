import Collection from '../../components/collection/Collection';
import ContactInfo from '../../components/contactinfo/ContactInfo';
import MadeWithLove from '../../components/madeWithLove/MadeWithLove';
import NewCollection from '../../components/newcollection/NewCollection';
import Partners from '../../components/partners/Partners';
import PeopleFeedback from '../../components/peoplefeedback/PeopleFeedback';
import RecentPost from '../../components/recentpost/RecentPost';
import UpdatedCollection from '../../components/updatedcollection/UpdatedCollection';
import HomeCarasoul from './HomeCarasoul';
import './homescreen.css'

const HomeScreen = () => {
    return (
        <div className="home-container">
            <HomeCarasoul />
            <Collection />
            <MadeWithLove />
            <UpdatedCollection />
            <PeopleFeedback />
            <NewCollection />
            <Partners />
            <RecentPost />
        </div>
    )
}

export default HomeScreen;