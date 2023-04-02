import React from 'react';
import AnalyticsComponent from '../../components/analytics/AnalyticsComponent';
import Content from '../../components/content';
import AnalyticsTest from '../../components/analytics/AnalyticsTest';

const AnalyticsPage = () => {
  return (
    <Content title="Analytics">
      <AnalyticsTest />
      <AnalyticsComponent />
    </Content>
  );
};

export default AnalyticsPage;
