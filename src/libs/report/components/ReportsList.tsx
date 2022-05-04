import React from 'react';
import { ReportFragment, useGetReportsQuery } from '../../../api';
import { List } from '../../../components';

export const ReportsList: React.FC = () => {
  // console.log('REPORT LIST RENDER');
  const { data, loading, error } = useGetReportsQuery();

  if (loading) {
    return <h1>Reports is loading...</h1>;
  }

  if (error) {
    return <div>`Error: ${error}`</div>;
  }

  return (
    <List
      items={data?.getReports.edges.map((r) => r.node) || []}
      renderItem={(report: ReportFragment) => (
        <div
          key={report.id}
          // eslint-disable-next-line no-console
          onClick={() => console.log(`Report: ${report.name}`)}
          style={{ padding: 15, border: '1px solid gray', cursor: 'pointer' }}
        >
          {report.name}
        </div>
      )}
    />
  );
};
