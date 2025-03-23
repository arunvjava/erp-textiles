import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../../../models/brand.model';
import { Response } from '../../../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends ApiService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  saveBrand(brand: string) {
    return this.post<Response<string>>('/brand', brand);
  }

  updateBrand(brand: Brand) {
    return this.put<Response<string>>('/brand', brand);
  }

  getAllBrands() {
    return this.get<Response<Brand[]>>("/brand/all");
  }

  deleteBrands(ids: string[]) {
    return this.delete(`/brand/${ids}`);
  }

}
