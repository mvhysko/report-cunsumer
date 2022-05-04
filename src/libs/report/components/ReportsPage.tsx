import React from 'react';
import { Search } from '../../../components';
import { ReportsList } from './ReportsList';

export const ReportsPage: React.FC = () => {
  // console.log('REPORT PAGE RENDER');

  return (
    <div>
      <Search value="" placeholder="Search report" />
      <ReportsList />
    </div>
  );
};
