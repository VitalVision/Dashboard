import React from 'react';
import AnalyticsComponent from '../../components/analytics/AnalyticsComponent';
import Content from '../../components/content';
import PatientImprovementChart from '../../components/analytics/PatientImprovementChart';

const AnalyticsPage = () => {
  return (
    <Content title="Analytics">
      <h1 className="text-center text-4xl font-bold mb-4">Doctor's Analytics Dashboard</h1>
      <PatientImprovementChart />
      <AnalyticsComponent />
    </Content>
  );
};

export default AnalyticsPage;
