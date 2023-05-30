//*Import base
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

//*Import components
import Header from './components/header/Header';
import Appointment from './components/appointment/Appointment';

//*Import styles
import './styles/index.scss';

//*Import components lazy
const About = React.lazy(() => import('./components/about/About'));
const Review = React.lazy(() => import('./components/review/Review'));
const Services = React.lazy(() => import('./components/services/Services'));
const History = React.lazy(() => import('./components/history/History'));
const Staff = React.lazy(() => import('./components/staff/Staff'));
const Choice = React.lazy(() => import('./components/choice/Choice'));
const Application = React.lazy(() =>
  import('./components/application/Application')
);
const Contacts = React.lazy(() => import('./components/contacts/Contacts'));
const Footer = React.lazy(() => import('./components/footer/Footer'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/review' element={<Review />} />
        </Routes>
      </Suspense>
      <Routes>
        <Route path='/' element={<Appointment />} />
      </Routes>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/' element={<Services />} />
        </Routes>
        <Routes>
          <Route path='/' element={<History />} />
        </Routes>
        <Routes>
          <Route path='/specialists' element={<Staff />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Choice />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Application />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Contacts />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
