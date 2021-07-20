import MeetupDetail from "../../components/meetups/MeetupDetail"

export default function MeetupDetails() {

    return (
        <>
            <MeetupDetail
                img='https://upload.wikimedia.org/wikipedia/commons/5/57/Concord_Pacific_Master_Plan_Area.jpg'
                title='First meetup'
                address='999 deman street'
                description='the first meetup'
            />

        </>
    )
}

{/* <img src={props.img} alt='image' />
<h1>{props.title}</h1>
<address>{props.address}</address>
<p>{props.description}</p> */}