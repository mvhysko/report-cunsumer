import { makeAutoObservable } from 'mobx';
import { apiClient, GetReportsDocument, ReportFragment } from '../../../api';

class ReportsState {
  private _reports: ReportFragment[] = [];
  private _total = 0;
  private _loading = false;

  get reports(): ReportFragment[] {
    return this._reports;
  }

  get total(): number {
    return this._total;
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor() {
    makeAutoObservable(this);
  }

  public add(report: ReportFragment): void {
    this._reports.push(report);
  }

  public remove(id: string): void {
    this._reports = this._reports.filter((r) => r.id !== id);
  }

  public fetch(): void {
    this._loading = true;

    apiClient.query({ query: GetReportsDocument }).then(({ data, loading }) => {
      if (!loading) {
        this._total = data?.getReports.total || 0;
        this._reports = data?.getReports.edges.map((r: { node: any }) => r.node) || [];

        this._loading = false;
        // eslint-disable-next-line no-console
        console.log('REPORTS ARE LOADED!');
      } else {
        // eslint-disable-next-line no-console
        console.log('REPORTS ARE LOADING...');
      }
    });
  }
}

export default new ReportsState();
