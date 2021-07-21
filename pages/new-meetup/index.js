// /domin/new-meetup
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';


export default function NewMeetupPage() {

    const router = useRouter()
    const addMeetupHandler = async (newMeetupData) => {
        
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            //  convert to json (JavaScript Object Notation) string
            body: JSON.stringify(newMeetupData),
            header: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)

        router.push('/')
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
