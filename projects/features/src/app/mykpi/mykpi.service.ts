import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockKpis } from '../mocks/mock-kpi-data';

export interface KPIItem {
  userID: string;
  stt: string;
  maKpi: string;
  chiTieu: string;
  mucTieu: string;
  trongSo: string;
  congThuc: string;
  ketQua: string;
  kpi: string;
  theLoai: 'chucNang' | 'mucTieu' | 'tuanThu';
  namHoc: string;
}

@Injectable({ providedIn: 'root' })
export class MykpiService {
  constructor() {}

  /** Lấy KPI theo userID + năm */
  getKpis(userID: string, year: string, role?: string): Observable<KPIItem[]> {
    let data = mockKpis.filter(k => k.userID === userID && k.namHoc === year);

    if (role) {
      data = data.filter(k => Array.isArray(k.roles) ? k.roles.includes(role) : false);
    }

    return of(data);
  }
}
