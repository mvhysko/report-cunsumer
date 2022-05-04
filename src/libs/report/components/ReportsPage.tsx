import { FC } from 'react';
import { Search } from '../../../components';
import { ReportsList } from './ReportsList';

export const ReportsPage: FC = () => {
  console.log('REPORT PAGE RENDER');

  return (
    <div>
      <Search value='' placeholder='Search report' />
      <ReportsList />
    </div>
  )
}
