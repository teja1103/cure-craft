import React, { useState } from 'react';

interface DoctorConsultationProps {}

const DoctorConsultation: React.FC<DoctorConsultationProps> = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState<number | undefined>(undefined);
  const [problem, setProblem] = useState('');
  const [mobileNumber, setMobileNumber] = useState<number | undefined>(undefined);
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');

  const handleSubmit = () => {
    // Perform logic to submit the form data
    console.log('Form data submitted:', {
      fullName,
      age,
      gender,
      weight,
      problem,
      mobileNumber,
      email,
      preferredDate,
      preferredTime,
    });
  };

  return (
    <div className="profile-container">
      <h2>Book an Appointment?</h2>
      <div className="application-form">
        <label htmlFor="full-name">Full Name:</label>
        <input
          type="text"
          id="full-name"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          value={age || ''}
          onChange={(e) => setAge(parseInt(e.target.value, 10))}
          required
        />
        <br />
        <br />
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          placeholder="Enter your gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          placeholder="Enter your weight"
          value={weight || ''}
          onChange={(e) => setWeight(parseInt(e.target.value, 10))}
          required
        />
        <br />
        <br />
        <label htmlFor="problem">Problem he/she is facing:</label>
        <input
          type="text"
          id="problem"
          placeholder="Enter the problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="contact-details">Contact Details:</label>
        <input
          type="number"
          id="contact-details"
          placeholder="Enter your Mobile Number"
          value={mobileNumber || ''}
          onChange={(e) => setMobileNumber(parseInt(e.target.value, 10))}
          required
        />
                <br />
                <br />
        <input
          type="text"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
                <br />        <br />

        <div className="date-time-container">
          <label htmlFor="date" style={{ width: '100%' }}>
            Preferred Date:
          </label>
          <input
            type="date"
            id="date"
            className="date-input"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            required
          />
        <br />        <br />
          <label htmlFor="time" style={{ width: '100%' }}>
            Preferred Time:
          </label>
          <input
            type="time"
            id="time"
            className="time-input"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            required
          />
        </div>
      </div>
      {/* <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button> */}
      <button type="button" className="btn btn-outline-secondary submit-btn" onClick={handleSubmit}>Secondary</button>
    </div>
  );
};

export default DoctorConsultation;
