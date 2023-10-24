
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import DateTimePicker from 'react-datetime-picker';
import { useState } from 'react';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useNavigate } from 'react-router-dom';


function Calendar() {

  const navigate =   useNavigate() ; 
  const [ start, setStart ] = useState(new Date());
  const [ end, setEnd ] = useState(new Date());
  const [ eventName, setEventName ] = useState("");
  const [ eventDescription, setEventDescription ] = useState("");

  const session = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();
  
  if(isLoading) {
    return <></>
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar'
      }
    });
    if(error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    console.log("Creating calendar event");
    const event = {
      'summary': eventName,
      'description': eventDescription,
      'start': {
        'dateTime': start.toISOString(), // Date.toISOString() ->
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
      },
      'end': {
        'dateTime': end.toISOString(), // Date.toISOString() ->
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
      }
    }
    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        'Authorization':'Bearer ' + session.provider_token // Access token for google
      },
      body: JSON.stringify(event)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      navigate('/') ; 
    });
  }

  console.log(session);
  console.log(start);
  console.log(eventName);
  console.log(eventDescription);
  return (
    <div >
      <div className='flex flex-col gap-5 justify-center items-center leading-6 w-full h-full p-10' >
        {session ?
          <>
            <h2 className='font-bold text-2xl m-5'>Hey there {session.user.email}</h2>
            <p className=' font-bold text-2xl'>Start of your event</p>
            <DateTimePicker onChange={setStart} value={start} className="flex text-xl " />
            <p className=' font-bold text-2xl'>End of your event</p>
            <DateTimePicker onChange={setEnd} value={end} />
            <p className=' font-bold text-2xl'>Event name</p>
            <input type="text" onChange={(e) => setEventName(e.target.value)} className='border-2 border-black rounded-md p-1'/>
            <p className=' font-bold text-2xl'>Event description</p>
            <input type="text" onChange={(e) => setEventDescription(e.target.value)} className='border-2 border-black rounded-md p-1' />
            <hr />
            
         
            <button
          onClick={() => createCalendarEvent()}
          className="max-lg:w-[40vw] px-5 py-2 text-white rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200 opacity-100"
        >Create Calendar Event</button>
        <p></p>
            <button
          onClick={() => signOut()}
          className="max-lg:w-[40vw] px-5 py-2 text-white rounded-md bg-[#f45454] hover:scale-105 transition-all duration-200 opacity-100"
        >Sign Out</button>
          </>
          :
          <>
            <button onClick={() => googleSignIn()}>Sign In With Google</button>
          </>
        }
      </div>
    </div>
  );
}

export default Calendar;