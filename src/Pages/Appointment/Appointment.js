import React from 'react';
// import Header from '../../Home/Header/Header';

import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
// import './Appointment.css'
import AppointmentsHeader from './AppointmentsHeader';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
const Appointments = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div className='backgroundDesign'>
            {/* <Navigation></Navigation> */}
            <Header></Header>
            <AppointmentsHeader date={date} setDate={setDate}></AppointmentsHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointments;