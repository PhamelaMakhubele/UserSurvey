import React from 'react'
import { useState} from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'


const TakeSurvey = ({title}) => {
    const [surname, setSurname]= useState('');
    const [firstname, setFirstName]= useState('');
    const [contact, setContact] = useState('')
    const [date_entry, setDate] = useState('')
    const [age, setAge] = useState('')
    const [pizza, setPizza] = useState(false)
    const [pasta, setPasta] = useState(false)
    const [papwors,setPapWors] =useState(false)
    const [chicken,setChicken] =useState(false)
    const [beef,setBeef] =useState(false)
    const [other,setOther] = useState(false)
    const [eatOut, setEatOut] = useState(false)
    const [watchMovie, setWatchMovie] = useState(false)
    const [tv, setTv] =useState(false)
    const [listenRadio, setListenRadio]= useState(false)

    const navigate = useNavigate()
    const GoHome=() => navigate("/", {replace:true})


    
    

    const OnSubmit = (e) => {
       e.preventDefault()


       if (!surname || !firstname || !contact || !date_entry || !age){
        alert('Please fill out the blank field');
        return;
       }

       if (age < 5 || age > 120){
        alert('Age must be between 5 and 120');
        return;
       }

       if (!/^[\d]{10}$/.test(contact)){
        alert('Please enter a valid 10 digits ');
        return;
       }

       if (!pizza && !pasta && !papwors && !chicken && !beef && !other){
        alert('Please select at least one favourite food');
        return;
       }

       if (!eatOut && !watchMovie && !tv && !listenRadio) {
        alert('Please rate all statements');
        return;
      }


     
      
      const surveyData = {
        surname,
        firstname,
        contact,
        date_entry,
        age,
        pizza,
        pasta,
        papwors,
        chicken,
        beef,
        other,
        eatOut,
        watchMovie,
        tv,
        listenRadio,
      };

      addSurveyData(surveyData);

      setSurname('');
      setFirstName('');
      setContact('');
      setDate('');
      setAge('');
      setPizza(false);
      setPasta(false);
      setPapWors(false);
      setChicken(false);
      setBeef(false);
      setOther(false);
      setEatOut(false);
      setWatchMovie(false);
      setTv(false);
      setListenRadio(false);
      
    };

    const addSurveyData = (data) => {
      fetch('http://127.0.0.1:5000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
          alert('Successfully added to the database!')
        })
        .catch((error) => {
          console.error('Error adding to the database');
        });
    

    }
    


  return (
    <form className='form-container' onSubmit={OnSubmit} action='http://127.0.0.1:5000/add' method={'POST'}> 
        {title } <br />

        <label  className='space'>Personal Details:</label>

        <div >  
            <label htmlFor="surname">Surname
                <input 
                    id='surname'
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className='input-class'
                    required
                 />
            </label>
        </div>
        <div>
            <label htmlFor="name">First Name
                <input 
                    id='name'
                    className='input-class'
                    type="text" 
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)} 
                    required
                />

            </label>
        </div>
        <div>
            <label htmlFor="contact">Contact Number
                <input 
                    id='contact'
                    type="number" 
                    className='input-class'
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                />
            
            </label>
        </div>
        <div>
            <label htmlFor="Date">Date
                <input 
                    id='Date'
                    type="date"
                    value={date_entry}
                    onChange={(e) => setDate(e.target.value)}
                    className='input-class'
                    required
               />

            </label>
        </div>
        <div>
            <label htmlFor="age">Age
                <input 
                    id='age'
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className='input-class'
                    required
                 />
            </label>
        </div>

       
      <p>What is your favourite food? (You can choose more than 1 answer)</p>
      <label htmlFor='pizza'  className='check'>
        <input 
          id='pizza'
          type="checkbox"
          name="pizza"
          checked={pizza}
          onChange={(e) => setPizza(e.target.checked)}
        />
        Pizza
      </label>
      <label htmlFor='pasta' className='check'>
        <input 
          id='pasta'
          type="checkbox"
          name="pasta"
          checked={pasta}
          onChange={(e) => setPasta(e.target.checked)}
        />
        Pasta
      </label>
      <label htmlFor='papwors' className='check'>
        <input 
          id='papwors'
          type="checkbox"
          name="papwors"
          checked={papwors}
          onChange={(e) => setPapWors(e.target.checked)}
        />
        Pap and Wors
      </label>
      <label htmlFor='chicken' className='check'>
        <input 
          id='chicken'
          type="checkbox"
          name="chicken"
          checked={chicken}
          onChange={(e) => setChicken(e.target.checked)}
        />
        Chicken stir fry
      </label>
      <label htmlFor='beef' className='check'>
        <input 
          id='beef'
          type="checkbox"
          name="beef"
          checked={beef}
          onChange={(e) => setBeef(e.target.checked)}
        />
        Beef stir fry
      </label>
      <label htmlFor='other'  className='check'>
        <input 
          id='other'
          type="checkbox"
          name="other"
          checked={other}
          onChange={(e) => setOther(e.target.checked)}
        />
        Other
      </label>

      <p>On a scale of 1 to 5 indicate whether you strongly agree to strong disagree</p>
      <table>
        <thead>
        <tr style={{background:"darkgrey"}} >
            <th></th>
            <th  option='1'> Strongly Agree (5)</th>
            <th  option='2'>Agree (4)</th>
            <th  option='3'>Neutral (3)</th>
            <th option='4'>Disagree (2)</th>
            <th  option='5'>Strongly Disagree (1)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>I like to eat out</th>
            <td><input type="radio" name='eatOut' value='5' checked={eatOut==='5'} onChange={(e) => setEatOut(e.target.value)}/></td>
            <td><input type="radio" name='eatOut' value='4' checked={eatOut==='4'} onChange={(e) => setEatOut(e.target.value)}/></td>
            <td><input type="radio" name='eatOut' value='3' checked={eatOut==='3'} onChange={(e) => setEatOut(e.target.value)}/></td>
            <td><input type="radio" name='eatOut' value='2' checked={eatOut==='2'} onChange={(e) => setEatOut(e.target.value)}/></td>
            <td><input type="radio" name='eatOut' value='1' checked={eatOut==='1'} onChange={(e) => setEatOut(e.target.value)}/></td>
          </tr>
          <tr>
            <th>I like to watch movies</th>
            <td><input type="radio" name='watchMovie'  value='5' checked={watchMovie==='5'} onChange={(e)=> setWatchMovie(e.target.value)}/></td>
            <td><input type="radio"  name='watchMovie'  value='4' checked={watchMovie==='4'} onChange={(e)=> setWatchMovie(e.target.value)}/></td>
            <td><input type="radio"  name='watchMovie' value='3' checked={watchMovie==='3'} onChange={(e)=> setWatchMovie(e.target.value)}/></td>
            <td><input type="radio"  name='watchMovie'  value='2' checked={watchMovie==='2'} onChange={(e)=> setWatchMovie(e.target.value)}/> </td>
            <td><input type="radio"  name='watchMovie'  value='1' checked={watchMovie==='1'} onChange={(e)=> setWatchMovie(e.target.value)}/></td>
          </tr>
          <tr>
            <th>I like to watch TV</th>
            <td><input type="radio" name='tv'  value='5'  checked={tv==='5'} onChange={(e) => setTv(e.target.value)}/></td>
            <td><input type="radio" name='tv'  value='4' checked={tv==='4'} onChange={(e) => setTv(e.target.value)}/></td>
            <td><input type="radio" name='tv'  value='3' checked={tv==='3'} onChange={(e) => setTv(e.target.value)}/></td>
            <td><input type="radio" name='tv'  value='2' checked={tv==='2'} onChange={(e) => setTv(e.target.value)}/></td>
            <td><input type="radio" name='tv'  value='1' checked={tv==='1'} onChange={(e) => setTv(e.target.value)}/></td>
          </tr>
          <tr> 
            <th>I like to listen to the radio</th>
            <td><input type="radio" name='listenRadio' value='5' checked={listenRadio==='5'} onChange={(e) => setListenRadio(e.target.value)}/></td>
            <td><input type="radio" name='listenRadio' value='4' checked={listenRadio==='4'} onChange={(e) => setListenRadio(e.target.value)}/></td>
            <td><input type="radio" name='listenRadio' value='3' checked={listenRadio==='3'} onChange={(e) => setListenRadio(e.target.value)}/></td>
            <td><input type="radio" name='listenRadio' value='2' checked={listenRadio==='2'} onChange={(e) => setListenRadio(e.target.value)}/></td>
            <td><input type="radio" name='listenRadio' value='1' checked={listenRadio==='1'} onChange={(e) => setListenRadio(e.target.value)}/></td>
          </tr>
        </tbody>
      </table> <br/>

      <input className='btn' type='submit'  />

      <BiArrowBack onClick={GoHome}/>
    </form>
  );
};
TakeSurvey.defaultProps={
  title: 'Take our survey'
}
TakeSurvey.propTypes={
  title:PropTypes.string
}


export default TakeSurvey;
