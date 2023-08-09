import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function onAddMeetup(data) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
}

export default NewMeetupPage;
