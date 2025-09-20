import { Component, OnInit } from '@angular/core';
import { MykpiService, KPIItem } from './mykpi.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-mykpi',
  templateUrl: './mykpi.component.html',
  styleUrls: ['./mykpi.component.scss']
})
export class MykpiComponent implements OnInit {
  years = ['2023', '2024', '2025'];
  selectedYear = '2025';

  userID = '';
  userName = '';
  roles: string[] = [];
  roleLabels: string[] = [];
  selectedRole = ''; // role để filter view

  allKpis: KPIItem[] = [];
  chucNang: KPIItem[] = [];
  mucTieu: KPIItem[] = [];
  tuanThu: KPIItem[] = [];

  constructor(private svc: MykpiService, private app: AppService) {}

  ngOnInit(): void {
    const user = this.app.getCurrentUser();
    if (user) {
      this.userID = user.userID;
      this.userName = user.name;
      this.roles = user.roles || [];
      this.roleLabels = user.roleLabels || [];
      this.selectedRole = this.roles.length ? this.roles[0] : '';
      this.loadKpis();
    }
  }

  loadKpis() {
    // truyền selectedRole để lọc KPI theo role (nếu user muốn xem role cụ thể)
    this.svc.getKpis(this.userID, this.selectedYear, this.selectedRole).subscribe(data => {
      this.allKpis = data.map(d => ({
        ...d,
        maKpi: d.maKpi || 'Mã KPI',
        chiTieu: d.chiTieu || 'Chưa có',
        mucTieu: d.mucTieu || 'Chưa có',
        trongSo: d.trongSo || '',
        congThuc: d.congThuc || 'Chưa có',
        ketQua: d.ketQua || 'Chưa có',
        kpi: d.kpi || 'Chưa có'
      }));
      this.splitSections();
    });
  }

  splitSections() {
    this.chucNang = this.allKpis.filter(x => x.theLoai === 'chucNang');
    this.mucTieu = this.allKpis.filter(x => x.theLoai === 'mucTieu');
    this.tuanThu = this.allKpis.filter(x => x.theLoai === 'tuanThu');
  }

  // --- Tính toán ---
  toNumberWeight(value?: string): number {
    if (!value) return 0;
    const cleaned = value.toString().replace('%', '').trim();
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  }

  sumWeight(items: KPIItem[]): number {
    return items.reduce((sum, i) => sum + this.toNumberWeight(i.trongSo), 0);
  }

  sumKpi(group: any[]): number {
    if (!group || group.length === 0) return 0;
    return group.reduce((total, item) => {
      const value = parseFloat(item.kpi);
      return isNaN(value) ? total : total + value;
    }, 0);
  }

  totalOverall(): number {
    return this.sumKpi(this.chucNang) +
           this.sumKpi(this.mucTieu) +
           this.sumKpi(this.tuanThu);
  }

  getDanhGia(value: number): string {
    if (!value || value === 0) return 'Chưa có';
    if (value > 120) return 'A - Xuất sắc';
    if (value > 100) return 'B - Hoàn thành tốt';
    if (value > 80) return 'C - Hoàn thành';
    if (value <= 80 && value > 0) return 'D - Cần cải thiện';
    return 'F - Không hoàn thành';
  }

  // --- Sự kiện ---
  onRoleChange() { this.loadKpis(); }
  onYearChange() { this.loadKpis(); }

  getRoleLabel(role: string): string {
    switch (role) {
      case 'NV': return 'Nhân viên';
      case 'HT': return 'Hiệu trưởng';
      case 'HDT': return 'Hội đồng trường';
      case 'PHT': return 'Phó hiệu trưởng';
      case 'TDV': return 'Trưởng đơn vị';
      case 'PDV': return 'Phó đơn vị';
      case 'PTCCB': return 'Phòng TCCB';
      default: return role;
    }
  }
}
