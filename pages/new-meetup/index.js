// /domin/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';


export default function index() {

    const addMeetupHandler = (newMeetupData) => {
     console.log(newMeetupData)
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
