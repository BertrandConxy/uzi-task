import React from 'react';
import TopContainer from '../components/topContainer/TopContainer';
import TopNav from '../components/payments/TopNav';
import PaymentMode from '../components/payments/PaymentMode';

const Payment = () => (
  <section className="section-bg py-4">
    <TopContainer />
    <TopNav />
    <PaymentMode />

  </section>
);

export default Payment;
