import React from 'react';
import OverTable from '../components/overTable/OverTable';
import TopContainer from '../components/topContainer/TopContainer';

const Overview = () => (
  <section className="section-bg p-4">
    <TopContainer />
    <h1 className="text-warning fw-bold text-center text-uppercase">
      Overview
    </h1>

    <OverTable />
  </section>
);

export default Overview;
