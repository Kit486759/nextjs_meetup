// /domin/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';


export default function NewMeetupPage() {

    const addMeetupHandler = async (newMeetupData) => {
     console.log(newMeetupData)
     const response = await fetch('/api/new-meetup',{
         method: 'POST',
        //  convert to json (JavaScript Object Notation) string
         body: JSON.stringify(newMeetupData),
         header: {
             'Content-Type': 'application/json'
         }
     })

     const data = await response.json()
     console.log(newMeetupData)
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
